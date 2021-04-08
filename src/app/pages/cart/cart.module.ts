import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ModalModule, ButtonsModule, WavesModule } from 'angular-bootstrap-md'


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule,
    NzStepsModule,
    NzModalModule,
    NzButtonModule,
    NzNotificationModule,
    ModalModule, ButtonsModule, WavesModule
  ]
})
export class CartModule { }
