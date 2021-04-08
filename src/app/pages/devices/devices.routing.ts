import { DevicesListComponent } from './devices-list/devices-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices.component';
import { DevicesProductsComponent } from './products/devices-products.component';


const routes: Routes = [{
  path: '',
  component: DevicesComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: DevicesListComponent

        },

        {
          path: 'product/:id',
          component: DevicesProductsComponent,

        }
       
 
     
      ]     
    
 
  
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
