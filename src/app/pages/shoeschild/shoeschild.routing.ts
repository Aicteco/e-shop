import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoeschildProductsComponent } from './products/shoeschild-products.component';
import { ShoeschildListComponent } from './shoeschild-list/shoeschild-list.component';
import { ShoeschildComponent } from './shoeschild.component';


const routes: Routes = [{
  path: '',
  component: ShoeschildComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: ShoeschildListComponent

        },

        {
          path: 'product/:id',
          component: ShoeschildProductsComponent,

        }



      ]



}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoeschildRoutingModule { }
