import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
export type PayloadType = string | FormData;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpClient) { }

  API_KEY = 'http://localhost:3000/';

  /**
   * Http GET
   * @param url
   * @param options
   */
  sendGETRequest(url: string, options?): Observable<any> {
    return this.httpService.get(url, options);
  }

  /**
   * Http POST
   * @param url
   * @param json
   * @param options
   */
  sendPOSTRequest(
    url: string,
    json: PayloadType,
    options?
  ): Observable<any> {
    if (
      !(json instanceof FormData) &&
      (json === '' || json === '{}' || json === '[]')
    ) {
      return throwError(new Error('Json should not be empty'));
    }
    return this.httpService.post(url, json, options);
  }

}
