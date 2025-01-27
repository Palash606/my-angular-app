import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatFactService {
  getCatFactApi = 'https://dog.ceo/api/breeds/image/random';
  constructor(private httpClient: HttpClient) {}

  getCatFact(): Observable<any> {
    return this.httpClient.get(this.getCatFactApi);
  }
}
