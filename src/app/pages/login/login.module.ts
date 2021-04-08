import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md'
import {  InputsModule } from 'angular-bootstrap-md'



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule ,
    NzCardModule,
    HttpClientModule,
    NzAlertModule,
    ButtonsModule, WavesModule, IconsModule ,InputsModule
  ]
})
export class LoginModule { }
