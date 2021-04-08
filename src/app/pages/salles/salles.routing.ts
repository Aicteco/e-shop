import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlassesListComponent } from './glasses-list/glasses-list.component';
import { GlassesProductsComponent } from './products/glasses-products.component';
import { SallesComponent } from './salles.component';

const routes: Routes = [{
  path: '',
  component: SallesComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: GlassesListComponent

        },

        {
          path: 'product/:id',
          component: GlassesProductsComponent,

        }
    
      ]     
    
 
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SallesRoutingModule { }
