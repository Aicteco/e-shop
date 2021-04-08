import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { ClotheswomanComponent } from '../clotheswomen/clotheswoman.component';
import { ShoesmanListComponent } from './shoesman-list/shoesman-list.component';
import { ShoesmanProductsComponent } from './products/shoesman-products.component';
import { ShoesmanRoutingModule } from './shoesman.routing';
import { ShoesmanComponent } from './shoesman.component';
import { SearchsmPipe } from './searchsm.pipe';



@NgModule({
  declarations: [
    ShoesmanComponent,
    ShoesmanListComponent,
    ShoesmanProductsComponent ,
    SearchsmPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
     ShoesmanRoutingModule,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule


  ]
})
export class ShoesmanModule { }
