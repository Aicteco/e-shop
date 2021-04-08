import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { DoctorsComponent } from './doctors.component';
import { DoctorsProductsComponent } from './products/doctors-products.component';


const routes: Routes = [{
  path: '',
  component: DoctorsComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: DoctorsListComponent

        },

        {
          path: 'product/:id',
          component: DoctorsProductsComponent,

        }
       
 
     
      ]     
    
 
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
