import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { MarketRoutingModule } from './market.routing';
import { MarketListComponent } from './market-list/market-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { MarketProductsComponent } from './products/market-products.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearchcPipe } from './searchc.pipe';



@NgModule({
  declarations: [
    MarketComponent,
    MarketListComponent,
    MarketProductsComponent,
    SearchcPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    MarketRoutingModule,
    NzCardModule ,
    NzAvatarModule,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule ,




  ]
})
export class MarketModule { }
