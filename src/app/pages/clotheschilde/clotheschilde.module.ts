import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { ClotheschildComponent } from './clotheschilde.component';
import { ClotheschildListComponent } from './clotheschilde-list/clotheschilde-list.component';
import { ClotheschildProductsComponent } from './products/clotheschilde-products.component';
import { ClotheschildRoutingModule } from './clotheschilde.routing';
import { SearchChildPipe } from './searchChild.pipe';



@NgModule({
  declarations: [
    ClotheschildComponent,
    ClotheschildListComponent,
    ClotheschildProductsComponent ,
    SearchChildPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ClotheschildRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule


  ]
})
export class ClotheschildModule { }
