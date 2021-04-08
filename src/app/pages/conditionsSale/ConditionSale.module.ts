import { ConditionsSaleRoutingModule } from './ConditionSale.routing';
import { ConditionsSaleComponent } from './conditionsSale.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConditionsSaleComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ConditionsSaleRoutingModule
    
  ]
})
export class ConditionsSaleModule { }
