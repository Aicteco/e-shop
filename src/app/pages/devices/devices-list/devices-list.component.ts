import { Component, OnInit } from '@angular/core';
import {  Supplier } from '../../../shared/models/supplier.model';
import { City } from '../../../shared/models/city.model';
import { Router } from '@angular/router';
import { SuppliersService } from '../../../shared/services/api/suppliers.service';
import { LanguagesService } from '../../../shared/services/api/languages.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  // city object and array

  city: City = new City();
  cityList: City[]=[]


  supplier: Supplier = new Supplier();
  supplierList: Supplier[]=[] ;


  term:string;

  cityname:string;
  // data:[]
  constructor(

    private route: Router,
    private supplierServices: SuppliersService,
    private cityServices: LanguagesService,
   ) { }

   ngOnInit(): void {

    this.supplierServices.getAll( '1' ,'300', '0', '14','').subscribe(res => {
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
    this.route.navigate([`./shoping/devices/product/${id}`]);
  }
  selectCity(citys:City){
    this.city.id = citys.id;
    this.cityname = citys.name;
    this.supplierServices.getAll( '1', '300' , String(citys.id) , '14' ,'').subscribe(res => {
      this.supplierList = res.result.map(item => {
        item.imagePath = 'http://ahmedinara00-001-site1.dtempurl.com/' + item.imagePath;
        return item
    })
  })

  }


}
