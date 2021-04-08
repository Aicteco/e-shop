import { ConditionreturnitemComponent } from './conditionreturnitem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: ConditionreturnitemComponent,
       
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConditionreturnitemRoutingModule { }
