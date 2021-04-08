import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobilesComponent } from './mobiles.component';
import { MobilesRoutingModule } from './mobiles.routing';
import { MobilesListComponent } from './mobiles-list/mobiles-list.component';
import { MobileProductsComponent } from './products/mobile-products.component';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearchmobilePipe } from './searchmobile.pipe';



@NgModule({
  declarations: [
    MobilesComponent,
    MobilesListComponent,
    MobileProductsComponent,
    SearchmobilePipe

  ],
  imports: [
    CommonModule ,
    FormsModule,
    MobilesRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule ,
  ]
})
export class MobilesModule { }
