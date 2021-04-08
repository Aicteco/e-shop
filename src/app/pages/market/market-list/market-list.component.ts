import { Component, OnInit } from '@angular/core';
import {  Supplier } from '../../../shared/models/supplier.model';
import { City } from '../../../shared/models/city.model';
import { Router } from '@angular/router';
import { SuppliersService } from '../../../shared/services/api/suppliers.service';
import { LanguagesService } from '../../../shared/services/api/languages.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent implements OnInit {


  // city object and array

  city: City = new City();
  cityList: City[]=[]
  cityname:string;


  supplier: Supplier = new Supplier();
  supplierList: Supplier[]=[] ;


  term:string;

  // data:[]
  constructor(

    private route: Router,
    private supplierServices: SuppliersService,
    private cityServices: LanguagesService,
    private spinner :NgxSpinnerService,
    private toastr: ToastrService,
   ) { }

   ngOnInit(): void {
  this.spinner.show()
    this.supplierServices.getAll( '1' ,'900', '0', '1','').subscribe(res => {
      this.supplierList = res.result.map(item => {
        this.spinner.hide();
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



   // get AllSupllier

  navigateToProduct(id: number) {
    this.route.navigate([`./shoping/market/product/${id}`]);
  }

  selectCity(citys:City){
    this.city.id = citys.id;
    console.log(citys.id)
    this.cityname = citys.name;
    this.supplierServices.getAll( '1', '900' , String(this.city.id) , '1' ,'').subscribe(res => {
      this.supplierList = res.result.map(item => {
        item.imagePath = 'http://ahmedinara00-001-site1.dtempurl.com/' + item.imagePath;
        return item
    })
  })

  }



}



