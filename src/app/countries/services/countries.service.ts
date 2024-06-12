import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string ='https://countriesnow.space/api/v0.1'


  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable <Countries[]> {
    const url =(`${this.apiUrl}/countries/${term}`);
    return this.http.get<Countries[]>(url);

  }



}
