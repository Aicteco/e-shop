import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataWithRanking } from '../../models/data-with-ranking.model';
import { Products } from '../../models/peoducts.model';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';

const API_URL = END_POINTS.ProductGetAll;
const API_URL_ID = END_POINTS.productsById;
const API_URL_HoT = END_POINTS.GetAllHot;





@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


    // get Album search
    getAll(offset: string , limit: string ,SupplierId:string, CategoryId:string, SearchTerm:string,  ): Observable<DataWithRanking<Products>> {
      let params = new HttpParams();

      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      params = params.append('SupplierId' , SupplierId);
      params = params.append('CategoryId' , CategoryId);
      params = params.append('SearchTerm' , SearchTerm);
      return this.http.get<DataWithRanking<Products>>(API_URL  ,{params:params}  ) }


      get(id: number): Observable<Products> {
        return this.http.get<Products>(API_URL_ID + `/${id}`);

      }
           // get Album search
    getAllHot(offset: string , limit: string ,SupplierId:string, CategoryId:string, SearchTerm:string,  ): Observable<DataWithRanking<Products>> {
      let params = new HttpParams();

      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      params = params.append('SupplierId' , SupplierId);
      params = params.append('CategoryId' , CategoryId);
      params = params.append('SearchTerm' , SearchTerm);
      return this.http.get<DataWithRanking<Products>>(API_URL_HoT  ,{params:params}  ) }





}
