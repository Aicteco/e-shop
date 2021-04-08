import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { END_POINTS } from './globals/global-config';
import { Artist, DataWithRanking } from '../../models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }




}
