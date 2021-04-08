import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { ClotheswomanComponent } from './clotheswoman.component';
import { ClotheswomanListComponent } from './clothes-list/clotheswoman-list.component';
import { ClotheswomanProductsComponent } from './products/clotheswoman-products.component';
import { ClothewomanRoutingModule } from './clotheswoman.routing';
import { SearchwPipe } from './searchw.pipe';



@NgModule({
  declarations: [
    ClotheswomanComponent,
    ClotheswomanListComponent,
    ClotheswomanProductsComponent ,
    SearchwPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ClothewomanRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule


  ]
})
export class ClotheswomanModule { }
