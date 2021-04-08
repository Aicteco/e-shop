import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceelectorincListComponent } from './deviceelectorinc-list/deviceelectorinc-list.component';

import { DeviceelectorincComponent } from './deviceelectorinc.component';
import { DeviceelectorincProductsComponent } from './products/deviceelectorinc-products.component';


const routes: Routes = [{
  path: '',
  component: DeviceelectorincComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: DeviceelectorincListComponent

        },

        {
          path: 'product/:id',
          component: DeviceelectorincProductsComponent,

        }



      ]



}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceelectorincRoutingModule { }
