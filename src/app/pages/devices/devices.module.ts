import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { DevicesRoutingModule } from './devices.routing';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesProductsComponent } from './products/devices-products.component';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearchdevPipe } from './searchdev.pipe';


@NgModule({
  declarations: [
    DevicesComponent,
    DevicesListComponent,
    DevicesProductsComponent,
    SearchdevPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    DevicesRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule ,

  ]
})
export class DevicesModule { }
