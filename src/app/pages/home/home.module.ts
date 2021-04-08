import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonsModule, CardsModule, DropdownModule, WavesModule , ModalModule } from 'angular-bootstrap-md';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    RouterModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule ,
    SwiperModule ,
    ModalModule

  ]
})
export class HomeModule { }
