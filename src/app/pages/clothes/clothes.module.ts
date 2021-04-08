import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothesComponent } from './clothes.component';
import { ClothesRoutingModule } from './clothes.routing';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ClothesProductsComponent } from './products/clothes-products.component';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    ClothesComponent,
    ClothesListComponent,
    ClothesProductsComponent ,
    SearchPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ClothesRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule


  ]
})
export class ClothesModule { }
