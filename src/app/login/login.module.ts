import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginCadastroFormComponent } from './login-cadastro-form/login-cadastro-form.component';
import { LoginRoutingModule } from './login.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, LoginRoutingModule
  ],
  declarations: [LoginFormComponent, LoginComponent, LoginCadastroFormComponent],
  exports: [LoginComponent],
  providers: [AngularFireAuth]
})
export class LoginModule { }
