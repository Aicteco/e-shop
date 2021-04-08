import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { AboutusRoutingModule } from './aboutus.routing';



@NgModule({
  declarations: [
    AboutusComponent,
  ],
  imports: [
    CommonModule ,
    AboutusRoutingModule,


  ]
})
export class AboutusModule { }
