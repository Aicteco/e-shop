import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ServicesRoutingModule } from './services.routing';
import { ServicesComponent } from './services.component';
import { ServicesProductsComponent } from './products/services-products.component';
import { ServicesListComponent } from './serviceslist/services-list.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearchserPipe } from './searchser.pipe';



@NgModule({
  declarations: [
    ServicesComponent,
    ServicesProductsComponent,
    ServicesListComponent,
    SearchserPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ReactiveFormsModule,
    ServicesRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule ,

  ]
})
export class ServicesModule { }
