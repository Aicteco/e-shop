import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient } from '@angular/common/http';
import { Songs, DataWithRanking } from '../../models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }




}
