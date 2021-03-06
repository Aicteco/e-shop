import { Supplier } from './../../../shared/models/supplier.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../../shared/models/peoducts.model';
import { SwalService } from '../../../shared/services/swal.service';
import { ProductsService } from '../../../shared/services/api/products.service';
import { Cart } from '../../../shared/models/cart.model';
import { AnnonceService } from '../../../shared/services/api/annonce.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { proudctDetails } from 'src/app/shared/models';
import { AlbumService } from 'src/app/shared/services/api';



@Component({
  selector: 'app-market-products',
  templateUrl: './market-products.component.html',
  styleUrls: ['./market-products.component.scss']
})
export class MarketProductsComponent implements OnInit {

// cart

term:string;
  proudct: Products[]=[];
  proudctlist:Products;
  data=[];
  pagenumber=0;
  pageTitle=1;

  supplier:Supplier = new Supplier();

  isAdd:boolean = true;


image:string;
name:string;
categoryName:string;
supplierName:string;
price:number;
itemAdded: number = 1
flag: boolean = true;
Details:boolean = false;

productDeatis: proudctDetails;

Url= 'http://ahmedinara00-001-site1.dtempurl.com/';

description : string;

cart: Cart = new Cart();
  constructor( private productServices: ProductsService ,
    private swalService: SwalService,
    private route: Router,
    private notification: NzNotificationService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
 private spinner:NgxSpinnerService,
    private cartServices: AnnonceService ,
    private cartservices:AlbumService) { }

  ngOnInit(): void {


    if (this.router.snapshot.queryParams.isAdd === 'true' || this.router.snapshot.routeConfig.path === 'Add') {
      this.isAdd = true;

    } else {
      this.supplier.id = this.router.snapshot.params.id;
      this.getSlide(this.supplier.id)
      this.isAdd = false
    }
  }
  // get all data of annonce
  // get all data of annonce
  getSlide(id){
    this.spinner.show();
   this.productServices.getAll('1','900', String(id),'1','').subscribe(res =>{
       this.proudct = res.result.map(item =>{
         item.imagePath = 'http://ahmedinara00-001-site1.dtempurl.com/'+item.imagePath;
         this.spinner.hide();
         return item
       })


   })

 }


  navigate(item){
    this.pagenumber= item -1
    this.pageTitle = item;
    // this.getAllData();
  }


  postCart() {
    localStorage.getItem('token') ;
    if(localStorage.token == null) {
      // this will only work if the token is set in the localStorage
      this.toastr.warning('?????????? ???????????? ???????? ');

      setTimeout(() => {
        this.route.navigate(['/shoping/login']);

      }, 3000);

    }


    this.cartServices.creatCart(this.cart).subscribe(
      res=>{
        this.cartServices.getlength();

        this.toastr.success('???? ?????????? ???????????? ?????? ???????????? ');
      }
    )
  }



  fill(data:Products) {
    this.cart.productId = data.id;
    this.image =data.imagePath ;


  }

  See(data:Products){
    this.image =data.imagePath ;
    this.supplierName = data.supplierName;
    this.categoryName = data.categoryName;
    this.price = data.price


  }

  back(){
    this.route.navigate(['/shoping/market']);

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

this.productServices.get(products.id).subscribe(
  res=>{
    this.cart.productId = products.id
    this.proudctlist = res;
    this.description = this.proudctlist.description;
    this.productDeatis = Object.values(this.proudctlist)[19];

  }
)
    }
}
