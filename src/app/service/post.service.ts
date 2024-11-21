import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getAllApi = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  // When this method is called I will return the container
  getAllPost(): Observable<any> {
    return this.httpClient.get(this.getAllApi);
  }
}
