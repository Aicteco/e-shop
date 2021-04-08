import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClothesComponent } from './clothes.component';
import { ClothesProductsComponent } from './products/clothes-products.component';


const routes: Routes = [{
  path: '',
  component: ClothesComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: ClothesListComponent

        },

        {
          path: 'product/:id',
          component: ClothesProductsComponent,

        }
       
 
     
      ]     
    
 
  
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothesRoutingModule { }
