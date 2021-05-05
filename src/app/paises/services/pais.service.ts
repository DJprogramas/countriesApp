import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  get httpParams(){
    return new HttpParams()
    .set( 'fields','name;flag;capital;population;alpha2Code')
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const urlCapital = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(urlCapital, {params: this.httpParams});
  }

  getCountryCode(id:string):Observable<Country[]>{
    const urlCode = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(urlCode)
  }

  buscarRegion(termino: string):Observable<Country[]>{

    

    const urlRegion = `${this.apiUrl}/region/${termino}`
    return this.http.get<Country[]>(urlRegion,{ params: this.httpParams })
      .pipe(
        tap(console.log)
      )
  }
}
