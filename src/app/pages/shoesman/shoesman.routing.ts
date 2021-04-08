import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoesmanProductsComponent } from './products/shoesman-products.component';
import { ShoesmanListComponent } from './shoesman-list/shoesman-list.component';
import { ShoesmanComponent } from './shoesman.component';


const routes: Routes = [{
  path: '',
  component: ShoesmanComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: ShoesmanListComponent

        },

        {
          path: 'product/:id',
          component: ShoesmanProductsComponent,

        }



      ]



}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoesmanRoutingModule { }
