import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexNavbarComponent } from './navbars/index-navbar/index-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NavbarModule, WavesModule, ButtonsModule, DropdownModule, CardsModule } from 'angular-bootstrap-md'


@NgModule({
  imports: [
    CommonModule,
    RouterModule ,
    NzDropDownModule,
    NzSelectModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    DropdownModule.forRoot(),
    CardsModule

  ],
  declarations: [
    IndexNavbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  exports: [
    IndexNavbarComponent,
    SidebarComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
