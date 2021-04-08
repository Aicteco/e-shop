import { Component, OnInit } from '@angular/core';
import {  Supplier } from '../../../shared/models/supplier.model';
import { City } from '../../../shared/models/city.model';
import { Router } from '@angular/router';
import { SuppliersService } from '../../../shared/services/api/suppliers.service';
import { LanguagesService } from '../../../shared/services/api/languages.service';
import { AlbumService, CategoriesCategoriesService, KhalihaService } from '../../../shared/services/api';
import { Doctor, ServicesMan } from 'src/app/shared/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactUs } from 'src/app/shared/models/contactus.model';
import { NotificationService } from 'src/app/shared/services/api/notification.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  // city object and array

  city: City = new City();
  cityList: City[]=[]


  supplier: Supplier = new Supplier();
  supplierList: Supplier[]=[] ;

service:Doctor[]=[]

serviceObj:Doctor = new Doctor();


  cityname:string;
  categoryname:string;

  serviceman:ServicesMan[]=[];
  Url= 'http://ahmedinara00-001-site1.dtempurl.com/';
  term:string;

  registerForm: FormGroup;


  contact: ContactUs = new ContactUs();


name:string;
subject:string;


  // data:[]
  constructor(

    private route: Router,
    private supplierServices: SuppliersService,
    private cityServices: LanguagesService,
    private doctorservice: KhalihaService ,
    private servicesmanServices: CategoriesCategoriesService,
    private toastr: ToastrService,
    private contactusServices: NotificationService ,


   ) { }


   ngOnInit(): void {


    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.minLength(3), Validators.required ]),
      'phone': new FormControl(null, [Validators.minLength(2), Validators.required]),
      'email': new FormControl(null, [Validators.minLength(2), Validators.required,]),
    });


    this.doctorservice.getAllServicesSpecialist('1','100','').subscribe(
      res=> {
      this.service = res.result
      })


    this.cityServices.getAll('1','100','').subscribe(
      res=>{
      this.cityList = res.result;
      }
    )


    this.servicesmanServices.getAllServicesMan('1','300','0' ,'0' ,'').subscribe(
      res=>{
        this.serviceman = res.result
      }
    )
  }

  navigateToProduct(id: number) {
    this.route.navigate([`./shoping/services/product/${id}`]);
  }




  selectCity(citys:City){
    this.city.id = citys.id;
    localStorage.setItem('cityservice' ,String(citys.id));
    let a = localStorage.getItem('cityservice');
  let b =   localStorage.getItem('categoryServices');
    this.cityname = citys.name;

this.servicesmanServices.getAllServicesMan('1','300',String(a) ,String(b) ,'').subscribe(
  res=>{
    this.serviceman = res.result
  }
)
  }

  selectcategoryname(doc:Doctor){
    this.categoryname = doc.name

    localStorage.setItem('categoryServices' ,String(doc.id));
  let a =  localStorage.getItem('cityservice');
   let b = localStorage.getItem('categoryServices');

    this.servicesmanServices.getAllServicesMan('1','300',String(a) ,String(b) ,'').subscribe(
      res=>{
        this.serviceman = res.result
      }
    )
  }

  PostPharmacy(){
    this.contactusServices.createProblem(this.contact).subscribe(res=> {
      this.toastr.success(' تم ارسال طلب الخدمة للادارة  بنجاح .. شكرا لك ');
       // form validation
       this.name = "";
       this.registerForm = new FormGroup({
        'firstName': new FormControl(null, [Validators.minLength(3), Validators.required ]),
        'phone': new FormControl(null, [Validators.minLength(2), Validators.required]),
        'email': new FormControl(null, [Validators.minLength(2), Validators.required, Validators.pattern(/[a-zA-Z 1-9]/)]),
      });
          this.toastr.success('شكرا لك', 'تم ارسال الخدمة    ')
      }
    )
  }

  cancal(){
    this.toastr.success('شكرا لك')

  }

  fill(data:ServicesMan){
    this.name = data.name;
    this.contact.lastName = this.name;
    this.contact.message = String( data.phoneNumber +"/" + data.address +"/" + (Object.values(data)[8].name) );

  }
}








