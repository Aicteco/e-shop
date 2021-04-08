import { Supplier } from '../../../shared/models/supplier.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../../shared/models/peoducts.model';
import { SwalService } from '../../../shared/services/swal.service';
import { ProductsService } from '../../../shared/services/api/products.service';
import { Cart } from '../../../shared/models/cart.model';
import { AnnonceService } from '../../../shared/services/api/annonce.service';


@Component({
  selector: 'app-doctors-products',
  templateUrl: './doctors-products.component.html',
  styleUrls: ['./doctors-products.component.scss']
})
export class DoctorsProductsComponent implements OnInit {

// cart 
cart:Cart = new Cart();


  proudct: Products[]=[];
  data=[];
  pagenumber=0;
  pageTitle=1;

  supplier:Supplier = new Supplier();

  isAdd:boolean = true;

  image:string;
  term:string;
  constructor( private productServices: ProductsService ,
    private swalService: SwalService,
    private route: Router,
    
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
      this.productServices.getAll('38',String(id),'','1','100').subscribe(res =>{
          
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
  
  
   
  
  
  
 
  
    See(data:Products){
      this.image =data.imagePath ;
     
  
  
    }
  }