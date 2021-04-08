import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { FurnitureComponent } from './furniture.component';
import { FurnitureProductsComponent } from './products/furniture-products.component';


const routes: Routes = [{
  path: '',
  component: FurnitureComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: FurnitureListComponent

        },

        {
          path: 'product/:id',
          component: FurnitureProductsComponent,

        }
    
      ]     
    
 
  
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FurnitureRoutingModule { }
