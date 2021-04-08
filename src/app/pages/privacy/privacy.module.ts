import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  PrivacyRoutingModule } from './privacy.routing';
import { FormsModule } from '@angular/forms';
import { PrivacyComponent } from './privacy.component';



@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    PrivacyRoutingModule
  ]
})
export class PrivacyModule { }
