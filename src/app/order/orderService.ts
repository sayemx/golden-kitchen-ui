import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import baseUrl from '../shared/helper';
import { environment } from 'src/environments/environment';
import { Order } from './order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}

  addOrder(order: any) {
    return this.http.post(`${environment.baseUrl}/addorder`, order);
  }
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.baseUrl}/getorder`);
  }
  deleteOrder(id: number): Observable<Object> {
    return this.http.delete(`${environment.baseUrl}/order/${id}`);
  }
  updateOrder(id: number, order: Order): Observable<Object> {
    return this.http.put(`${environment.baseUrl}/order/${id}`, order);
  }
}
