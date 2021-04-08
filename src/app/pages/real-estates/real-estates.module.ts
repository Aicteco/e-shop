import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealEstatesComponent } from './real-estates.component';
import { RealEstateRoutingModule } from './RealEstate.routing';
import { RealEstatrsListComponent } from './real-estates-list/real-estatrs-list.component';
import { RealProductsComponent } from './products/Real-products.component';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearchrealPipe } from './searchreal.pipe';


@NgModule({
  declarations: [
    RealEstatesComponent,
    RealEstatrsListComponent,
    RealProductsComponent ,
    SearchrealPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RealEstateRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule ,



  ]
})
export class RealEstatesModule { }
