import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { ShoeschildComponent } from './shoeschild.component';
import { ShoeschildListComponent } from './shoeschild-list/shoeschild-list.component';
import { ShoeschildProductsComponent } from './products/shoeschild-products.component';
import { ShoeschildRoutingModule } from './shoeschild.routing';
import { SearchscPipe } from './searchsc.pipe';



@NgModule({
  declarations: [
    ShoeschildComponent,
    ShoeschildListComponent,
    ShoeschildProductsComponent ,
    SearchscPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ShoeschildRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule


  ]
})
export class ShoeschildModule { }
