import { ConditionsSaleComponent } from './conditionsSale.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: ConditionsSaleComponent,
       
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConditionsSaleRoutingModule { }
