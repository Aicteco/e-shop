import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataWithRanking, Doctor, ServicesMan } from '../../models';
import { Delivery } from '../../models/Delivery.model';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';


const API_URL_getAllDoctorSpeicaalist = END_POINTS.DoctorSpeicaalist;
const API_URL_getAllDotor = END_POINTS.AllDoctor;
const API_URL_ServiceSpecialist = END_POINTS.ServiceSpecialist;
const API_URL_getservicesPep = END_POINTS.AllDoctor;






@Injectable({
  providedIn: 'root'
})
export class KhalihaService {

  constructor(private http: HttpClient) { }



     // get Album search
     getAllDoctorSpecialist(offset: string , limit: string , SearchTerm:string ): Observable<DataWithRanking<Doctor>> {
      let params = new HttpParams();
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      params = params.append('SearchTerm' , SearchTerm);
      return this.http.get<DataWithRanking<Doctor>>(API_URL_getAllDoctorSpeicaalist  ,{params:params}  ) }


           // get Album search
     getAllServicesSpecialist(offset: string , limit: string , SearchTerm:string ): Observable<DataWithRanking<Doctor>> {
      let params = new HttpParams();
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      params = params.append('SearchTerm' , SearchTerm);
      return this.http.get<DataWithRanking<Doctor>>(API_URL_ServiceSpecialist  ,{params:params}  ) }


     // get Album search
     getAllDoctor(offset: string , limit: string , CityId:string ,DoctorSpecialistId:string,  SearchTerm:string  ): Observable<DataWithRanking<ServicesMan>> {
      let params = new HttpParams();
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      params = params.append('CityId' , CityId);
      params = params.append('DoctorSpecialistId' , DoctorSpecialistId);
      params = params.append('SearchTerm' , SearchTerm);
      return this.http.get<DataWithRanking<ServicesMan>>(API_URL_getAllDotor  ,{params:params}  ) }

    //  getAll(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<Delivery>> {
    //   let params = new HttpParams();
    //   params = params.append('SearchTerm' , SearchTerm);
    //   params = params.append('offset' , offset);
    //   params = params.append('limit' , limit);
    //   return this.http.get<DataWithRanking<Delivery>>(API_URL_getAll  ,{params:params}  ) }

    //  getAll(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<Delivery>> {
    //   let params = new HttpParams();
    //   params = params.append('SearchTerm' , SearchTerm);
    //   params = params.append('offset' , offset);
    //   params = params.append('limit' , limit);
    //   return this.http.get<DataWithRanking<Delivery>>(API_URL_getAll  ,{params:params}  ) }





}
