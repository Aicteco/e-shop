import { ConditionreturnitemComponent } from './conditionreturnitem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConditionreturnitemRoutingModule } from './conditionreturnitem.routing';



@NgModule({
  declarations: [
    ConditionreturnitemComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ConditionreturnitemRoutingModule
  ]
})
export class ConditionreturnitemModule { }
