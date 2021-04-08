
import { Supplier } from '../../../shared/models/supplier.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../../shared/models/peoducts.model';
import { SwalService } from '../../../shared/services/swal.service';
import { ProductsService } from '../../../shared/services/api/products.service';
import { Cart } from '../../../shared/models/cart.model';
import { AnnonceService } from '../../../shared/services/api/annonce.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-services-products',
  templateUrl: './services-products.component.html',
  styleUrls: ['./services-products.component.scss']
})
export class ServicesProductsComponent implements OnInit {

// cart 
cart:Cart = new Cart();


  proudct: Products[]=[];
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
term:string;


  constructor( private productServices: ProductsService ,
    private swalService: SwalService,
    private route: Router,
    private notification: NzNotificationService,

    private router: ActivatedRoute,
    private cartServices: AnnonceService) { }

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
  getSlide(id){
    this.productServices.getAll('46',String(id),'','1','100').subscribe(res =>{

        this.proudct = res.result.map(item =>{
        item.imagePath = 'http://eshop5827-001-site3.etempurl.com'+item.imagePath
        return item
      })
      
    })

  }
  navigate(item){
    this.pagenumber= item -1
    this.pageTitle = item;
    // this.getAllData();
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

  
  postCart() {
    localStorage.getItem('token') ;
    if(localStorage.token == null) {
      // this will only work if the token is set in the localStorage
      this.notification.error('تسجيل الدخول اولا  '  , '')

      setTimeout(() => {
        this.route.navigate(['/shoping/login']);

      }, 3000);

    }
    
    this.cartServices.creatCart(this.cart).subscribe(
      res=>{
        this.cart.quantity = null;
        this.notification.success('شكرا لك', 'تم اضافه المنتج الي العربه ')
      }
    )
  }




}
