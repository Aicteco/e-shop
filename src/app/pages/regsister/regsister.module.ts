import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegsisterComponent } from './regsister.component';
import { RegsisterRoutingModule } from './regsister.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegsisterComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
   ReactiveFormsModule,
    RegsisterRoutingModule
  ]
})
export class RegsisterModule { }
