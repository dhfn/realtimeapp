import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login-cadastro-form',
  templateUrl: './login-cadastro-form.component.html',
  styleUrls: ['./login-cadastro-form.component.css']
})
export class LoginCadastroFormComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  form_cadastro(f: NgForm){

    let email = f.controls.email.value.toString().trim();
    let senha = f.controls.senha.value.toString().trim();

    this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
      .then(t => {
        alert('Ususário criado com sucesso! \nID: ' + t.user.uid);
      })
      .catch(c => {
        alert('Usuário não pôde ser criado. \nErro: ' + c.message);
      })

  } 

  verificaSeEmailsSaoIguais(f: NgForm) : boolean {
    
    if(f.controls.email)
      return f.controls.email.value.toString().trim() == f.controls.emailconfirmacao.value.toString().trim();
    
    return false;
  }

  verificaSeSenhasSaoIguais(f: NgForm): boolean {

    if(f.controls.senha)
      return f.controls.senha.value.toString().trim() == f.controls.senhaconfirmacao.value.toString().trim();

    return false;
  }

  verificaSeFormValido(f: NgForm) : boolean {

    return f.form.valid && this.verificaSeEmailsSaoIguais(f) && this.verificaSeSenhasSaoIguais(f);
  }

}
