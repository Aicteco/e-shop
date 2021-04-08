import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClotheswomanListComponent } from './clothes-list/clotheswoman-list.component';
import { ClotheswomanComponent } from './clotheswoman.component';
import { ClotheswomanProductsComponent } from './products/clotheswoman-products.component';


const routes: Routes = [{
  path: '',
  component: ClotheswomanComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: ClotheswomanListComponent

        },

        {
          path: 'product/:id',
          component: ClotheswomanProductsComponent,

        }



      ]



}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothewomanRoutingModule { }
