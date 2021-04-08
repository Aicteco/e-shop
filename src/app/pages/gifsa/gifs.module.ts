import { GifsListComponent } from './gifs-list/gifs-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsProductsComponent } from './products/gifs-products.component';
import { GifsaComponent } from './gifsa.component';
import { FormsModule } from '@angular/forms';
import { GifsRoutingModule } from './gifs.routing';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearchgPipe } from './searchg.pipe';



@NgModule({
  declarations: [
    GifsProductsComponent,
    GifsListComponent,
    GifsaComponent,
    SearchgPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    GifsRoutingModule,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule


  ]
})
export class GifsModule { }
