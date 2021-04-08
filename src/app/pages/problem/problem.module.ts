import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemComponent } from './problem.component';
import { ProblemRoutingModule } from './problem.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProblemComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ProblemRoutingModule
  ]
})
export class ProblemModule { }
