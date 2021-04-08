import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealProductsComponent } from './products/Real-products.component';
import { RealEstatrsListComponent } from './real-estates-list/real-estatrs-list.component';
import { RealEstatesComponent } from './real-estates.component';


const routes: Routes = [{
  path: '',
  component: RealEstatesComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: RealEstatrsListComponent

        },

        {
          path: 'product/:id',
          component: RealProductsComponent,

        }
    
      ]     
    
 
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateRoutingModule { }
