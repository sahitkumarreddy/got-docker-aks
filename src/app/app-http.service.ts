import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  public baseUrl = "https://www.anapioficeandfire.com/api";

  constructor(private _http: HttpClient) { }

  public getBooks(): any {
    return this._http.get(this.baseUrl + '/books')
      .pipe(catchError(this.errorHandler));
  }
  public getHouses(): any {
    return this._http.get(this.baseUrl + '/houses')
      .pipe(catchError(this.errorHandler));
  }
  public getCharacters(): any {
    return this._http.get(this.baseUrl + '/characters')
      .pipe(catchError(this.errorHandler));
  }

  public getSingleBookInformation(bookId): any {
    return this._http.get(this.baseUrl + '/books/' + bookId)
      .pipe(catchError(this.errorHandler));
  }
  public getSingleHouseInformation(houseId): any {
    return this._http.get(this.baseUrl + '/houses/' + houseId)
      .pipe(catchError(this.errorHandler));
  }
  public getSingleCharacterInformation(characterId): any {
    return this._http.get(this.baseUrl + '/characters/' + characterId)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
