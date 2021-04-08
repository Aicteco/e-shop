import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },


    {
      path: 'home',
      loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),
    },

    {
      path: 'aboutus',
      loadChildren: () => import('../pages/aboutus/aboutus.module').then(m => m.AboutusModule),
    },
    {
      path: 'clothes',
      loadChildren: () => import('../pages/clothes/clothes.module').then(m => m.ClothesModule),
    },

    {
      path: 'clotheswomen',
      loadChildren: () => import('../pages/clotheswomen/clotheswoman.module').then(m => m.ClotheswomanModule),
    },


    {
      path: 'clotheschild',
      loadChildren: () => import('../pages/clotheschilde/clotheschilde.module').then(m => m.ClotheschildModule),
    },

    {
      path: 'shoeschild',
      loadChildren: () => import('../pages/shoeschild/shoeschild.module').then(m => m.ShoeschildModule),
    },
    {
      path: 'shoesman',
      loadChildren: () => import('../pages/shoesman/shoesman.module').then(m => m.ShoesmanModule),
    },

    {
      path: 'shoeswoman',
      loadChildren: () => import('../pages/shoeswomen/shoeswomen.module').then(m => m.ShoeswomenModule),
    },



    {
      path: 'devices',
      loadChildren: () => import('../pages/devices/devices.module').then(m => m.DevicesModule),
    },
    {
      path: 'devicesElc',
      loadChildren: () => import('../pages/deviceelectorinc/deviceelectorinc.module').then(m => m.deviceelectorincModule),
    },


    {
      path: 'mobiles',
      loadChildren: () => import('../pages/mobiles/mobiles.module').then(m => m.MobilesModule),
    },


    {
      path: 'market',
      loadChildren: () => import('../pages/market/market.module').then(m => m.MarketModule),
    },



    {
      path: 'pharmacy',
      loadChildren: () => import('../pages/pharmacy/pharmacy.module').then(m => m.PharmacyModule),
    },



    // {
    //   path: 'problem',
    //   loadChildren: () => import('../pages/problem/problem.module').then(m => m.ProblemModule),
    // },


    {
      path: 'glasses',
      loadChildren: () => import('../pages/salles/salles.module').then(m => m.SallesModule),
    },
    {
      path: 'services',
      loadChildren: () => import('../pages/services/services.module').then(m => m.ServicesModule),
    },

    {
      path: 'login',
      loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule),
    },

    {
      path: 'landing',
      loadChildren: () => import('../pages/landing/landing.module').then(m => m.LandingModule),
    },





    {
      path: 'regsister',
      loadChildren: () => import('../pages/regsister/regsister.module').then(m => m.RegsisterModule),
    },



    {
      path: 'cafe',
      loadChildren: () => import('../pages/cafe-resturant/cafe-resturant.module').then(m => m.CafeResturantModule),
    },




    {
      path: 'furniture',
      loadChildren: () => import('../pages/furniture/furniture.module').then(m => m.FurnitureModule),
    },




    {
      path: 'doctors',
      loadChildren: () => import('../pages/doctors/doctors.module').then(m => m.DoctorsModule),
    },




    {
      path: 'realestate',
      loadChildren: () => import('../pages/real-estates/real-estates.module').then(m => m.RealEstatesModule),
    },


    {
      path: 'bill',
      loadChildren: () => import('../pages/bill/bill.module').then(m => m.BillModule),
    },

    {
      path: 'cart',
      loadChildren: () => import('../pages/cart/cart.module').then(m => m.CartModule),
    },
    {
      path: 'privacy',
      loadChildren: () => import('../pages/privacy/privacy.module').then(m => m.PrivacyModule),
    },

    {
      path: 'gifs',
      loadChildren: () => import('../pages/gifsa/gifs.module').then(m => m.GifsModule),
    },


    {
      path: 'ClientServices',
      loadChildren: () => import('../pages/clientServices/clientServices.module').then(m => m.ClientServicesModule),
    },


    {
      path: 'Conditions',
      loadChildren: () => import('../pages/conditionreturnitem/conditionreturnitem.module').then(m => m.ConditionreturnitemModule),
    },


    {
      path: 'ConditionsUser',
      loadChildren: () => import('./conditionsSale/ConditionSale.module').then(m => m.ConditionsSaleModule),
    },

  ]

}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutesModule { }
