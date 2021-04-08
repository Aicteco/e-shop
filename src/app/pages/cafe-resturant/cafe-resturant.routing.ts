import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeResturantListComponent } from './cafe-resturant-list/cafe-resturant-list.component';
import { CafeResturantComponent } from './cafe-resturant.component';
import { CafeProductsComponent } from './products/cafe-products.component';


const routes: Routes = [{
  path: '',
  component: CafeResturantComponent
  ,
      children: [
        {
          path: '',
          redirectTo: 'cafe',
          pathMatch: 'full'
        },
        {
          path: 'cafe',
          component: CafeResturantListComponent,

        },

        {
          path: 'product/:id',
          component: CafeProductsComponent,

        },
   
     
      ]     
    
 
  
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeResturantRoutingModule { }
