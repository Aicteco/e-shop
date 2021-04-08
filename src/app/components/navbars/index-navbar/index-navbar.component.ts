import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";




@Component({
  selector: "app-index-navbar",
  templateUrl: "./index-navbar.component.html",
  styleUrls: ['./index-navbar.component.scss']

})
export class IndexNavbarComponent implements OnInit  {


  imgShow:boolean;
  sidebar:boolean = false
  Lenght:any
token:boolean;
  constructor( private route:Router
  ) {


  }


  ngOnInit() {

if (localStorage.getItem('token') != null){
this.token = true
}else {
  this.token = false;
}

  }


  logout(){
    localStorage.removeItem('token')
    this.route.navigate([`./shoping/home`]);
    window.location.reload();

  }

    // close sidebar button
    close(){
      this.sidebar = false;
      this.imgShow = false;

  }
  // open sidebar button
  open(){
      this.sidebar = true;
   this.imgShow = true;

  }

  NavigateToCart(){
    this.route.navigate([`./shoping/cart`]);
  }

  Login(){
    this.route.navigate([`./shoping/login`]);

  }

  backtoHome(){
    this.route.navigate([`./shoping/home`]);

  }


ngDoCheck(): void {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.


  this.Lenght = localStorage.getItem('length' )

}








}
