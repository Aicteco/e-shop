import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeResturantRoutingModule } from './cafe-resturant.routing';
import { CafeResturantComponent } from './cafe-resturant.component';
import { CafeResturantListComponent } from './cafe-resturant-list/cafe-resturant-list.component';
import { CafeProductsComponent } from './products/cafe-products.component';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    CafeResturantComponent,
    CafeResturantListComponent ,
    CafeProductsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    CafeResturantRoutingModule,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule


  ]
})
export class CafeResturantModule { }
