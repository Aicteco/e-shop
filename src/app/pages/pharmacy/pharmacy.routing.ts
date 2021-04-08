import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { PharmacyComponent } from './pharmacy.component';
import { PharmacyProductsComponent } from './products/pharmacy-products.component';


const routes: Routes = [{
  path: '',
  component: PharmacyComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: PharmacyListComponent

        },

        {
          path: 'product/:id',
          component: PharmacyProductsComponent,

        }
    
      ]     
    
 
  
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
