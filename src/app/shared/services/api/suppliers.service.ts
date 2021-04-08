import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';
import { DataWithRanking, Order, Supplier } from '../../models';

const API_URL = END_POINTS.SupplierGetAll;


const API_URL_createOrder = END_POINTS.postorder;




@Injectable({
  providedIn: 'root'
})
export class SuppliersService {



  constructor(private http: HttpClient) { }

    // get Album search
    getAll(offset: string , limit: string ,CityId:string,CategoryId:string, SearchTerm:string  ): Observable<DataWithRanking<Supplier>> {
      let params = new HttpParams();
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      params = params.append('CityId' , CityId);
       params = params.append('CategoryId' , CategoryId);
      params = params.append('SearchTerm' , SearchTerm);

      return this.http.get<DataWithRanking<Supplier>>(API_URL  ,{params:params}  ) }









  createOrder(model: Order): Observable<Order> {
    return this.http.post<Order>(API_URL_createOrder, model);
  }
}
