import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  City, DataWithRanking } from '../../models';


const API_URL_getAll = END_POINTS.getAllCity;


@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http: HttpClient) { }


     // get Album search
     getAll(offset: string , limit: string ,SearchTerm:string  ): Observable<DataWithRanking<City>> {
      let params = new HttpParams();
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      params = params.append('SearchTerm' , SearchTerm);

      return this.http.get<DataWithRanking<City>>(API_URL_getAll  ,{params:params}  ) }




}
