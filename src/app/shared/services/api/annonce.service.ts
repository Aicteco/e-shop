import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About, AnnocementImage, Cart, CartGet, DataWithRanking } from '../../models';

const API_URL = END_POINTS.getAbout;


const API_URL_cart = END_POINTS.Cart;
const API_URL_cartGet = END_POINTS.Cart;


const API_URL_Delete = END_POINTS.postorder;
const API_URL_DeleteItem = END_POINTS.Cart;

const API_URL_DeleteAll = END_POINTS.deleteOrder;



const API_URL_Announcement = END_POINTS.Announcement;
const API_URL_Image = END_POINTS.Image;
const API_URL_notification= END_POINTS.notification;



length =0;


@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) { }

  creatCart(model: Cart): Observable<Cart> {
    this.getlength();
    return this.http.post<Cart>(API_URL_cart, model);

  }

  get(): Observable<About[]> {
    return this.http.get<About[]>(API_URL );
  }
    // get Album search
    getAll(): Observable<CartGet[]> {

      return this.http.get<CartGet[]>(API_URL_cartGet  ) }

      delete(id:number): Observable<CartGet>{

        return this.http.delete<CartGet>(API_URL_DeleteItem + `/${id}`);
        }

        deleteAll():Observable<any>{
          return this.http.delete(API_URL_DeleteAll );
          }



            // get Album search
    getAllAnnocement(): Observable<AnnocementImage[]> {
      return this.http.get<AnnocementImage[]>(API_URL_Announcement  ) }

                 // get Album search
    getAllImage(): Observable<AnnocementImage[]> {
      return this.http.get<AnnocementImage[]>(API_URL_Image  ) }



       // get Album search
       getAllImagenotification(offset: string , limit: string , SearchTerm:string ): Observable<DataWithRanking<AnnocementImage>> {
        let params = new HttpParams();
        params = params.append('offset' , offset);
        params = params.append('limit' , limit);
        params = params.append('SearchTerm' , SearchTerm);
        return this.http.get<DataWithRanking<AnnocementImage>>(API_URL_notification  ,{params:params}  ) }



    getlength(){

      this.getAll().subscribe(
        res=>{
          if(res!= null){
            localStorage.setItem('length' ,String(res.length))

          }
        }
      )
    }
}
