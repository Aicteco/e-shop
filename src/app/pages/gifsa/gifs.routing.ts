import { GifsListComponent } from './gifs-list/gifs-list.component';
import { GifsaComponent } from './gifsa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsProductsComponent } from './products/gifs-products.component';


const routes: Routes = [{
  path: '',
  component: GifsaComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: GifsListComponent

        },

        {
          path: 'product/:id',
          component: GifsProductsComponent,

        }
    
      ]     
    
 
  
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifsRoutingModule { }
