import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Categories, DataWithRanking, ServicesMan } from '../../models';

const API_URL = END_POINTS.CategoryGetAll;
const API_URL_services = END_POINTS.Service;




@Injectable({
  providedIn: 'root'
})
export class CategoriesCategoriesService {

  constructor(private http: HttpClient) { }

    // get Categories search
    getAll(offset: string , limit: string ,SearchTerm:string  ): Observable<DataWithRanking<Categories>> {
      let params = new HttpParams();
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      params = params.append('SearchTerm' , SearchTerm);

     return this.http.get<DataWithRanking<Categories>>(API_URL  ,{params:params}  ) }
    // get Categories search
    getAllServicesMan(offset: string , limit: string ,CityId:string ,ServiceSpecialistId:string  ,SearchTerm:string  ): Observable<DataWithRanking<ServicesMan>> {
      let params = new HttpParams();
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      params = params.append('CityId' , CityId);
      params = params.append('ServiceSpecialistId' , ServiceSpecialistId);

      params = params.append('SearchTerm' , SearchTerm);

     return this.http.get<DataWithRanking<ServicesMan>>(API_URL_services  ,{params:params}  ) }



}
