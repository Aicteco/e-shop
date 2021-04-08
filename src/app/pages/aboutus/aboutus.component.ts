import { Component, OnInit } from '@angular/core';
import { About } from '../../shared/models/annonce.model';
import { AnnonceService } from '../../shared/services/api/annonce.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  cardShow: boolean= false;


  about: About[]=[];


  constructor(private aboutServices: AnnonceService) { }

  ngOnInit(): void {


    this.aboutServices.get().subscribe(
      res=> {
        this.about  = res;

      }
    )

    setTimeout(()=>{
      this.cardShow = true
    } , 2000 )
  }

}
