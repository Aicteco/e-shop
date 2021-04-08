import { NotificationService } from './../../shared/services/api/notification.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImageService } from '../../shared/services/api/image.service';
import { Image } from '../../shared/models/image.model';
import { Notifications } from '../../shared/models/notification.model';
import { AnnonceService } from '../../shared/services/api/annonce.service';
import { AnnocementImage, Cart, proudctDetails } from '../../shared/models';
import { Products } from 'src/app/shared/models/peoducts.model';
import { ProductsService } from 'src/app/shared/services/api';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




annocement: AnnocementImage[]=[];
ImageList: AnnocementImage[]=[];
NotoficationList: AnnocementImage[]=[];

productList: Products[]=[];
productLists:Products;


term:string;
itemAdded: number = 1
flag: boolean = true;
Details:boolean = false;

productDeatis: proudctDetails;

Url= 'http://ahmedinara00-001-site1.dtempurl.com/';

description : string;


cart: Cart = new Cart();

  notification: Notifications[]=[];


url = 'http://ahmedinara00-001-site1.dtempurl.com/';

config: SwiperOptions = {
  pagination: { el: '.swiper-pagination', clickable: true },
  autoHeight: true,
  allowTouchMove: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 4
    },
    1025: {
      slidesPerView: 5
    },

    800: {
      slidesPerView: 3
    },
    500: {
      slidesPerView: 3
    },
    400: {
      slidesPerView: 2
    },
    300: {
      slidesPerView: 2
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: false
};


  constructor(private spinner: NgxSpinnerService ,
    private imageServices: ImageService ,
    private NotificationServices: NotificationService ,
    private annocementservice: AnnonceService,
    private productservice:ProductsService ,
    private route:Router,
    private cartServices:AnnonceService,
    private toastr:ToastrService ,
    )   {  }



  ngOnInit(): void {


    this.annocementservice.getAllAnnocement().subscribe(
      res=>{
        this.spinner.show();
        this.annocement = res
        this.spinner.hide();
      }
    )


    this.annocementservice.getAllImage().subscribe(
      res=>{
        this.spinner.show();
        this.ImageList = res;
        this.spinner.hide();
      }
    )
    this.annocementservice.getAllImagenotification('1', '100' ,'').subscribe(
      res=>{
        this.spinner.show();
        this.NotoficationList = res.result
        ;
        this.spinner.hide();
      }
    )


  this.productservice.getAllHot('1','1000', '0','0','').subscribe(
    res=>{
      this.productList = res.result
    }
  )
}



  // increase function product function
  plusItem() {
    this.cart.quantity = ++this.itemAdded;

    if (this.cart.quantity > 1) {
      this.flag = true;
    }
  }
  // decrease function product function
  minusItem() {
    this.cart.quantity = --this.itemAdded

    if (this.cart.quantity <= 1) {
      this.flag = false;
    }
  }


  products(){
this.Details = false;
  }
  openDetails(products:Products){
    this.Details = true;

this.productservice.get(products.id).subscribe(
res=>{
  this.cart.productId = products.id;

  this.productLists = res;
  this.description = this.productLists.description;
  this.productDeatis = Object.values(this.productLists)[19]
}
)
  }
  postCart() {
    localStorage.getItem('token') ;
    if(localStorage.token == null) {
      // this will only work if the token is set in the localStorage
      this.toastr.error('تسجيل الدخول اولا  '  , '')

      setTimeout(() => {
        this.route.navigate(['/shoping/login']);

      }, 3000);

    }

    this.cartServices.creatCart(this.cart).subscribe(
      res=>{
        this.cartServices.getlength();
        this.products();
        this.toastr.success('شكرا لك', 'تم اضافه المنتج الي العربه ')
      }
    )
  }

  market(){
    this.route.navigate(['/shoping/market']);
  }

  clothes(){
    this.route.navigate(['/shoping/clothes']);
  }

  clotheswomen(){
    this.route.navigate(['/shoping/clotheswomen']);
  }
  clotheschild(){
    this.route.navigate(['/shoping/clotheschild']);
  }

  shoesman(){
    this.route.navigate(['/shoping/shoesman']);
  }

  shoeswoman(){
    this.route.navigate(['/shoping/shoeswoman']);
  }

  shoeschild(){
    this.route.navigate(['/shoping/shoeschild']);
  }

  glasses(){
    this.route.navigate(['/shoping/glasses']);
  }

  mobiles(){
    this.route.navigate(['/shoping/mobiles']);
  }
  devicesElc(){
    this.route.navigate(['/shoping/devicesElc']);
  }

  realestate(){
    this.route.navigate(['/shoping/realestate']);
  }
  furniture(){
    this.route.navigate(['/shoping/furniture']);
  }
  cafe(){
    this.route.navigate(['/shoping/cafe']);
  }
  devices(){
    this.route.navigate(['/shoping/devices']);
  }

  gifs(){
    this.route.navigate(['/shoping/gifs']);
  }

  doctors(){
    this.route.navigate(['/shoping/doctors']);
  }

  pharmacy(){
    this.route.navigate(['/shoping/pharmacy']);
  }

  services(){
    this.route.navigate(['/shoping/services']);
  }
}


