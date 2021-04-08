import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Songs, DataWithRanking, Image } from '../../models';
import { Observable } from 'rxjs';

const API_URL_getAll = END_POINTS.ImageGetAll;






@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }


 
    // get Album search
    getAll(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<Image>> {
      let params = new HttpParams();
      params = params.append('SearchTerm' , SearchTerm);
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      return this.http.get<DataWithRanking<Image>>(API_URL_getAll  ,{params:params}  ) }

  
 


}
