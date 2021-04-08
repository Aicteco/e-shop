import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketListComponent } from './market-list/market-list.component';
import { MarketComponent } from './market.component';
import { MarketProductsComponent } from './products/market-products.component';



const routes: Routes = [{
  path: '',
  component: MarketComponent
  ,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: MarketListComponent,

        },

        {
          path: 'product/:id',
          component: MarketProductsComponent,

        },
   
     
      ]     
    
 
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
