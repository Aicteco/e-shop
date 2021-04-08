import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../../shared/services/api/annonce.service';
import { CartGet } from '../../shared/models/cartGet.model';
import { Order } from '../../shared/models/order.model';
import { SuppliersService } from '../../shared/services/api/suppliers.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Cart, Cartdetails } from '../../shared/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  cartList: CartGet[]=[];
  cart:Cart = new Cart();
  carlistitem:Cart[]=[];


  editObj :CartGet = new CartGet();
  index : number


  isVisible = false;
  isOkLoading = false;



  order:Order= new Order()
   sum: number = 0;

   registerForm: FormGroup;

   idofcart:any;
   Url= 'http://ahmedinara00-001-site1.dtempurl.com/';

   orderDetails:Cartdetails[]=[];
   constructor( private cartServices: AnnonceService ,
    private supplierServices:SuppliersService ,
    private notification: NzNotificationService,
    private toastr:ToastrService
    ) {
  }

  ngOnInit(): void {
    this.cart = new  Cart();
    this.order = new Order();

this.getcart();


          // form validation
          this.registerForm = new FormGroup({
            'customerName': new FormControl(null, [Validators.minLength(3), Validators.required]),
            'address': new FormControl(null, [Validators.minLength(2), Validators.required]),
            'phoneNumber': new FormControl(null, [Validators.minLength(2), Validators.required]),
          });
  }


  check( index: number){
    this.editObj = {...this.cartList[index]}
    this.index = index;
    localStorage.setItem('editObj' ,String(this.editObj.id))
  }

delete(  ) {
 this.idofcart =     localStorage.getItem('editObj')

         this.cartServices.delete(this.idofcart).subscribe(

           res => {
             this.getcart();
             this.cartServices.getlength();

            this.toastr.success('  شكرا لك', 'ازالة المنتج بنجاح        ')

           },
           err => {
            this.toastr.error('  عفوا ', 'ازالة المنتج خطأ        ')

           }
         )

     }


     postorder(){
      this.supplierServices.createOrder(this.order).subscribe(
        res=>{
          this.toastr.success(' شكرا لك', 'تم تأكيد العملية بنجاح     ')
                 // form validation
                 this.registerForm = new FormGroup({
                  'customerName': new FormControl(null, [Validators.minLength(3), Validators.required ]),
                  'address': new FormControl(null, [Validators.minLength(2), Validators.required]),
                  'phoneNumber': new FormControl(null, [Validators.minLength(2), Validators.required,]),
                });

                this.cartServices.deleteAll().subscribe(  );
                this.sum = 0;
                localStorage.setItem('length' ,String(0))

                this.getcart();
                this.cartServices.getlength();

        }
      )

     }



     getcart(){
       this.sum = 0;
      this.cartServices.getAll().subscribe(
        res=>{
          if(res != null){
            this.order.orderdeitalsdto =Object.assign( res);

            this.cartList = res.map(item=> {

              this.sum +=  (item.totaleamount);

              this.order.subtotale = this.sum;
              return item
            }

            );
          }


        }
      )
     }

}
