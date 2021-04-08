import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { END_POINTS } from './globals/global-config';
import { Album, Cart, DataWithRanking } from '../../models';
import { Observable } from 'rxjs';


const API_URL_cart = END_POINTS.Carts;


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  create(model: Cart): Observable<Cart> {
    return this.http.post<Cart>(API_URL_cart, model);
  }



}
