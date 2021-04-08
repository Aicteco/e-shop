import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClotheschildListComponent } from './clotheschilde-list/clotheschilde-list.component';
import { ClotheschildComponent } from './clotheschilde.component';
import { ClotheschildProductsComponent } from './products/clotheschilde-products.component';


const routes: Routes = [{
  path: '',
  component: ClotheschildComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: ClotheschildListComponent

        },

        {
          path: 'product/:id',
          component: ClotheschildProductsComponent,

        }



      ]



}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClotheschildRoutingModule { }
