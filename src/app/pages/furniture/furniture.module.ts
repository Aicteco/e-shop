import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { FurnitureComponent } from './furniture.component';
import { FurnitureProductsComponent } from './products/furniture-products.component';
import { FurnitureRoutingModule } from './furniture.routing';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearchPipe } from '../clothes/search.pipe';
import { SearchfPipe } from './searchf.pipe';



@NgModule({
  declarations: [FurnitureListComponent,
    FurnitureComponent,
    FurnitureProductsComponent,
    SearchfPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    FurnitureRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule

  ]
})
export class FurnitureModule { }
