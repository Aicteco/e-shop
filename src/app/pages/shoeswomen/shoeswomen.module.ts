import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { ShoeswomenComponent } from './shoeswomen.component';
import { ShoeswomenListComponent } from './shoeswomen-list/shoeswomen-list.component';
import { ShoeswomenProductsComponent } from './products/shoeswomen-products.component';
import { ShoeswomenRoutingModule } from './shoeswomen.routing';
import { SearchswPipe } from './searchsw.pipe';



@NgModule({
  declarations: [
    ShoeswomenComponent,
    ShoeswomenListComponent,
    ShoeswomenProductsComponent ,
    SearchswPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ShoeswomenRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule


  ]
})
export class ShoeswomenModule { }
