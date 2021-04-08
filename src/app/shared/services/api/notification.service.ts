import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Notifications } from '../../models/notification.model';
import { DataWithRanking } from '../../models/data-with-ranking.model';

import { Observable } from 'rxjs';
import { ContactUs } from '../../models/contactus.model';
import { Pharamcy } from '../../models';



const API_URL_getAll = END_POINTS.NotificationGetAll;




const API_URL_createProblem = END_POINTS.createProblem;


const API_URL_createPharmacy = END_POINTS.Pharmacycreate;



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }




  createProblem(model: ContactUs): Observable<ContactUs> {
    return this.http.post<ContactUs>(API_URL_createProblem, model);
  }



     // get Album search
     getAll(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<Notifications>> {
      let params = new HttpParams();
      params = params.append('SearchTerm' , SearchTerm);
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      return this.http.get<DataWithRanking<Notifications>>(API_URL_getAll  ,{params:params}  ) }




    createPharmacy(model: Pharamcy): Observable<Pharamcy> {
      return this.http.post<Pharamcy>(API_URL_createPharmacy, model);
    }


 }



