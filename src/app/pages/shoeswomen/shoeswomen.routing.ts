import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoeswomenProductsComponent } from './products/shoeswomen-products.component';
import { ShoeswomenListComponent } from './shoeswomen-list/shoeswomen-list.component';
import { ShoeswomenComponent } from './shoeswomen.component';


const routes: Routes = [{
  path: '',
  component: ShoeswomenComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: ShoeswomenListComponent

        },

        {
          path: 'product/:id',
          component: ShoeswomenProductsComponent,

        }



      ]



}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoeswomenRoutingModule { }
