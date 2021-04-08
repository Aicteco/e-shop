import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { DoctorsRoutingModule } from './doctors.routing';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { DoctorsProductsComponent } from './products/doctors-products.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';

import { ButtonsModule, CardsModule, DropdownModule, WavesModule ,ModalModule} from 'angular-bootstrap-md';
import { SearchdecPipe } from './searchdec.pipe';


@NgModule({
  declarations: [
    DoctorsComponent,
    DoctorsListComponent,
    DoctorsProductsComponent,
    SearchdecPipe
  ],
  imports: [
    CommonModule ,
    FormsModule,
    DoctorsRoutingModule,
    NzIconModule ,
    NzDropDownModule,
    WavesModule, ButtonsModule, DropdownModule, CardsModule ,
    ModalModule

  ]
})
export class DoctorsModule { }
