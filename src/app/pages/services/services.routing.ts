import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesProductsComponent } from './products/services-products.component';
import { ServicesComponent } from './services.component';
import { ServicesListComponent } from './serviceslist/services-list.component';

const routes: Routes = [{
  path: '',
  component: ServicesComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: ServicesListComponent

        },

        {
          path: 'product/:id',
          component: ServicesProductsComponent,

        }
    
      ]     
    
 
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
