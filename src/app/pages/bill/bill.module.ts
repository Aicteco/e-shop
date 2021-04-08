import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill.component';
import { BillRoutingModule } from './bill.routing';



@NgModule({
  declarations: [
    BillComponent
  ],
  imports: [
    CommonModule ,
    BillRoutingModule

  ]
})
export class BillModule { }
