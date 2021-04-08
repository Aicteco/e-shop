import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyComponent } from './pharmacy.component';
import { PharmacyRoutingModule } from './pharmacy.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { PharmacyProductsComponent } from './products/pharmacy-products.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearcpPipe } from './searchp.pipe';


@NgModule({
  declarations: [
    PharmacyComponent ,
    PharmacyListComponent,
    PharmacyProductsComponent,
    SearcpPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ReactiveFormsModule,
    PharmacyRoutingModule ,
      NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule

  ]
})
export class PharmacyModule { }
