import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../admin/customer-details/customer.model';
import { User } from '../auth/user.model';
// import baseUrl from '../shared/helper';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private http: HttpClient) {}
  //add user

  public addUser(user: any) {
    return this.http.post(`${environment.baseUrl}/user/`, user);
  }
  public addSupplier(supplier: any) {
    return this.http.post(`${environment.baseUrl}/user/supplier`, supplier);
  }

  getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.baseUrl}/user/users`);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.http.delete(`${environment.baseUrl}/user/${id}`);
  }
}
