import { Component, OnInit } from '@angular/core';
import {  Supplier } from '../../../shared/models/supplier.model';
import { City } from '../../../shared/models/city.model';
import { Router } from '@angular/router';
import { SuppliersService } from '../../../shared/services/api/suppliers.service';
import { LanguagesService } from '../../../shared/services/api/languages.service';
import { KhalihaService } from '../../../shared/services/api/Khaliha.service';
import { Doctor, DoctorTime, ServicesMan } from '../../../shared/models';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {


  // city object and array

  city: City= new City();
  cityList: City[]=[]
  term:string;

  supplier: Supplier = new Supplier();
  supplierList: Supplier[]=[] ;

doctorlist:Doctor[]=[];
doctor:Doctor;


doctorMan:ServicesMan[]=[];
doctorManObj:ServicesMan = new ServicesMan ();


  cityname:string;
  categoryname:string;

  doctortime:DoctorTime = new DoctorTime();

  time:string;
  day:string;
  // data:[]
  constructor(

    private route: Router,
    private supplierServices: SuppliersService,
    private cityServices: LanguagesService,
    private doctorservice: KhalihaService
   ) { }

  ngOnInit(): void {

    this.doctorservice.getAllDoctorSpecialist('1','100','').subscribe(
    res=>{
      this.doctorlist = res.result;
    })

    this.cityServices.getAll('1','100','').subscribe(
      res=>{
        this.cityList = res.result;
      }
    )

    this.doctorservice.getAllDoctor('1','100','0','0','').subscribe(
      res=>{
        this.doctorMan = res.result.map(item => {
          item.imagePath = 'http://ahmedinara00-001-site1.dtempurl.com/' + item.imagePath;
          return item
      })
      }
    ) }

  navigateToProduct(id: number) {
    this.route.navigate([`./shoping/market/product/${id}`]);
  }

  selectCity(citys:City){
    this.city.id = citys.id;
    this.cityname = citys.name;
    localStorage.setItem('city' ,String(citys.id));
    this.doctorservice.getAllDoctor( '1', '300' , String( localStorage.getItem('city')) , String(localStorage.getItem('category')) ,'').subscribe(res => {
      this.doctorMan = res.result.map(item => {
        item.imagePath = 'http://ahmedinara00-001-site1.dtempurl.com/' + item.imagePath;
        return item
    })
  })

  }

  selectcategoryname(doc:Doctor){
    this.categoryname = doc.name;
    localStorage.setItem('category' ,String(doc));
    this.doctorservice.getAllDoctor( '1', '300' ,String(localStorage.getItem('city')),String(doc.id),'').subscribe(res => {
      this.doctorMan = res.result.map(item => {
        item.imagePath = 'http://ahmedinara00-001-site1.dtempurl.com/' + item.imagePath;
        return item
    })
  })
  }


  fill(data){


    this.doctortime = data.doctorTimeTable;

}

}
