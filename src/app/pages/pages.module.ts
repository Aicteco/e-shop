import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutesModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/component.module';
import {  WavesModule, ButtonsModule, DropdownModule, CardsModule } from 'angular-bootstrap-md'
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    PagesComponent,


      ]
        ,
  imports: [
    CommonModule ,
    PagesRoutesModule,
    ComponentsModule,
    NgxSpinnerModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule

  ]

})
export class PagesModule { }
