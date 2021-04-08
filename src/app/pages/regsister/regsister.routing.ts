import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegsisterComponent } from './regsister.component';


const routes: Routes = [{
  path: '',
  component: RegsisterComponent,

}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegsisterRoutingModule { }
