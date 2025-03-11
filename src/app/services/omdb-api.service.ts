import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IOMDBResponse } from '../omdbresponse';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  private _siteURL= "https://www.omdbapi.com/"
  private _key= "?apikey=ec13022&t="
  private _vkey= "?apikey=ec13022&s="
  private handleError(err:HttpErrorResponse){
    console.log("OmdbApiService" + err.message);
    return throwError (() => new Error("OmdbApiService:" + err.message))
  }
  constructor(private _http:HttpClient) { }

  getMovieData(movieName:string):Observable<IOMDBResponse>{
    return this._http.get<IOMDBResponse>(this._siteURL+ this._key + movieName).pipe(
      tap(data => console.log("Moviedata/error" + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  getMovieDataV(movieName:string):Observable<IOMDBResponse>{
    return this._http.get<IOMDBResponse>(this._siteURL+ this._vkey + movieName).pipe(
      tap( data => console.log("Moviedata/error" + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
  
}

