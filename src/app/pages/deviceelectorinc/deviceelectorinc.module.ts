import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { DeviceelectorincComponent } from './deviceelectorinc.component';
import { DeviceelectorincListComponent } from './deviceelectorinc-list/deviceelectorinc-list.component';
import { DeviceelectorincProductsComponent } from './products/deviceelectorinc-products.component';
import { DeviceelectorincRoutingModule } from './deviceelectorinc.routing';
import { SearchelePipe } from './searchele.pipe';



@NgModule({
  declarations: [
    DeviceelectorincComponent,
    DeviceelectorincListComponent,
    DeviceelectorincProductsComponent ,
    SearchelePipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    DeviceelectorincRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule


  ]
})
export class deviceelectorincModule { }
