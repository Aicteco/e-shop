import { Component, OnInit } from '@angular/core';
import {  Supplier } from '../../../shared/models/supplier.model';
import { City } from '../../../shared/models/city.model';
import { Router } from '@angular/router';
import { SuppliersService } from '../../../shared/services/api/suppliers.service';
import { LanguagesService } from '../../../shared/services/api/languages.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.scss']
})
export class GifsListComponent implements OnInit {


  // city object and array

  city: City;
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

    this.supplierServices.getAll( '1' ,'300', '0', '15','').subscribe(res => {
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




  selectCity(citys:City){
    this.city.id = citys.id;
    console.log(citys.id)
    this.cityname = citys.name;
    this.supplierServices.getAll( '1', '300' , String(this.city.id) , '15' ,'').subscribe(res => {
      this.supplierList = res.result.map(item => {
        item.imagePath = 'http://ahmedinara00-001-site1.dtempurl.com/' + item.imagePath;
        return item
    })
  })

  }





  navigateToProduct(id: number) {
    this.route.navigate([`./shoping/gifs/product/${id}`]);
  }



}
