import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobilesListComponent } from './mobiles-list/mobiles-list.component';
import { MobilesComponent } from './mobiles.component';
import { MobileProductsComponent } from './products/mobile-products.component';


const routes: Routes = [{
  path: '',
  component: MobilesComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: MobilesListComponent

        },

        {
          path: 'product/:id',
          component: MobileProductsComponent,

        }
    
      ]     
    
 
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilesRoutingModule { }
