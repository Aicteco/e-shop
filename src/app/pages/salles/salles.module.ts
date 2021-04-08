import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SallesComponent } from './salles.component';
import { SallesRoutingModule } from './salles.routing';
import { GlassesListComponent } from './glasses-list/glasses-list.component';
import { GlassesProductsComponent } from './products/glasses-products.component';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ButtonsModule, CardsModule, DropdownModule, WavesModule } from 'angular-bootstrap-md';
import { SearchglPipe } from './searchgl.pipe';



@NgModule({
  declarations: [
    SallesComponent ,
    GlassesListComponent,
    GlassesProductsComponent,
    SearchglPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    SallesRoutingModule ,
    NzIconModule ,
    NzDropDownModule,
    NzNotificationModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule

  ]
})
export class SallesModule { }
