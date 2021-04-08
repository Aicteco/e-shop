import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {  Supplier } from '../../../shared/models/supplier.model';
import { City } from '../../../shared/models/city.model';
import { Router } from '@angular/router';
import { SuppliersService } from '../../../shared/services/api/suppliers.service';
import { LanguagesService } from '../../../shared/services/api/languages.service';
import { Pharamcy } from '../../../shared/models/pharmacy.model';
import { NotificationService } from '../../../shared/services/api/notification.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}



@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styleUrls: ['./pharmacy-list.component.scss']
})
export class PharmacyListComponent implements OnInit {
  @ViewChild('SlideImg', { static: false }) SlideImg: ElementRef;


  // city object and array

  city: City = new City();
  cityList: City[]=[]

  // pahramcy
  pahrmacy: Pharamcy = new Pharamcy();


  supplier: Supplier = new Supplier();
  supplierList: Supplier[]=[] ;


  term:string;
  cityname:string;
  // data:[]
  registerForm: FormGroup;

  constructor(

    private route: Router,
    private supplierServices: SuppliersService,
    private cityServices: LanguagesService,
    private renderer2: Renderer2,
    private PharmacyServices: NotificationService,
    private notification: NzNotificationService,
    private toastr: ToastrService,


   ) { }
   ngOnInit(): void {


          // form validation
          this.registerForm = new FormGroup({
            'customerName': new FormControl(null, [Validators.minLength(3), Validators.required ]),
            'address': new FormControl(null, [Validators.minLength(2), Validators.required]),
            'phoneNumber': new FormControl(null, [Validators.minLength(2), Validators.required,]),
          });

    this.supplierServices.getAll( '1' ,'300', '0', '13','').subscribe(res => {
      this.supplierList = res.result.map(item => {
        item.imagePath = 'http://ahmedinara00-001-site1.dtempurl.com/'+ item.imagePath;
        return item
      })
    })

    this.cityServices.getAll('1','100','').subscribe(
      res=>{
        this.cityList = res.result;
      }
    )

    }





  navigateToProduct(id: number) {
    this.route.navigate([`./shoping/pharmacy/product/${id}`]);
  }


  onFileChanged(event: HTMLInputEvent ,  prop: string) {
    const file = event.target.files[0];
    let el = event.target.parentNode as HTMLElement;
    this.renderer2.removeClass(el, 'services-image')
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
     this.pahrmacy.imagePath = reader.result as string;
     this.pahrmacy.imagePath = this.pahrmacy.imagePath.split(',')[1];

     this.renderer2.setStyle(el,
      'background-image', `url(${reader.result ? reader.result : this.pahrmacy.imagePath})`)
    this.renderer2.setStyle(el, 'background-size', 'cover')
    this.renderer2.setStyle(el, 'background-position', 'center')
    this.renderer2.setStyle(el, 'border', '3px solid black')

    }
  }

  changebackground(el: ElementRef, prop: string, isclear?: boolean, clsProp?: string) {


    if (isclear) {
      if (prop == 'UserImageURL') {
        this.renderer2.setStyle(el, 'background-image', `url('../../../../assets/img/upload.jpg')`)
        this.pahrmacy[clsProp] = "Deleted"
        return
      }
    }
    if (this.pahrmacy[prop] === null) return
    this.renderer2.setStyle(el.nativeElement,
      'background-image', `url('${this.pahrmacy.imagePath}')`);
        this.renderer2.setStyle(el.nativeElement, 'background-size', 'cover')
    this.renderer2.setStyle(el.nativeElement, 'background-position', 'center')
    this.renderer2.setStyle(el.nativeElement, 'border', '3px solid black')
    this.renderer2.removeClass(el.nativeElement, 'services-image')
  }

  PostPharmacy(){
    this.PharmacyServices.createPharmacy(this.pahrmacy).subscribe(
      res=>{
       // form validation
       this.registerForm = new FormGroup({
        'customerName': new FormControl(null, [Validators.minLength(3), Validators.required ]),
        'address': new FormControl(null, [Validators.minLength(2), Validators.required]),
        'phoneNumber': new FormControl(null, [Validators.minLength(2), Validators.required, Validators.pattern(/[a-zA-Z 1-9]/)]),
      });
this.cancal();
          this.toastr.success('شكرا لك', 'تم ارسال الروشتة    ')
      }
    )
  }
  selectCity(citys:City){
    this.city.id = citys.id;
    this.cityname = citys.name;
    this.supplierServices.getAll( '1', '300' , String(this.city.id) , '13' ,'').subscribe(res => {
      this.supplierList = res.result.map(item => {
        item.imagePath = 'http://ahmedinara00-001-site1.dtempurl.com/' + item.imagePath;
        return item
    })
  })

  }
  cancal(){
    this.toastr.success('شكرا لك')

  }
}
