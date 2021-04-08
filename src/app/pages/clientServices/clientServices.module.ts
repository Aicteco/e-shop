import { ClientServicesComponent } from './clientServices.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientServicesRoutingModule } from './clientServices.routing';



@NgModule({
  declarations: [
    ClientServicesComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ClientServicesRoutingModule
  ]
})
export class ClientServicesModule { }
