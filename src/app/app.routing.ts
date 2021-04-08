import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes =[
    {
      path: '',
      component: AppComponent,
      children: [
        {
          path: '',
          redirectTo: 'shoping',
          pathMatch: 'full'
        },
        {
          path: 'shoping',
          loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
        },
         
         
        {
          path: '**',
          redirectTo: 'shoping'
        }
      ]
    }
  
  ];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [ ],
})
export class AppRoutingModule { }
