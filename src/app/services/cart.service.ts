import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartUrl: string = 'https://www.google.com';

  constructor(private http: HttpClient) {}

  sendCartDetails(data: any): Observable<any> {
    return this.http.post<any>(this.cartUrl, data);
  }
}
