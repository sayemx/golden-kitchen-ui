import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { Order } from 'src/app/order/order.model';
import { OrderService } from 'src/app/order/orderService';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  orders: Order[];
  currentUsername: string;
  isSupplierLogin: boolean = false;
  isAdminLogin: boolean = false;
  constructor(
    private orderService: OrderService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.currentUsername = this.loginService.getUser().username;
    this.isSupplierLogin =
      this.loginService.getUser().authorities[0].authority === 'SUPPLIER';
    this.getOrders();
    if (this.loginService.getUser().username === 'admin1234') {
      this.isAdminLogin = true;
    }
  }
  getOrders() {
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }
  onDeleteOrder(id: number) {
    console.log('deleting');
    this.orderService.deleteOrder(id).subscribe((orders: any) => {
      // console.log(data);
      this.orders = orders;
      this.getOrders();
    });
  }

  isDelivered(status: boolean) {
    console.log(status);
    if (status) {
      return '#4BCA81';
    } else {
      return '#F7CB73';
    }
  }
  getHeading() {
    if (this.currentUsername === 'admin1234' || this.isSupplierLogin) {
      return 'ALL ORDERS';
    } else {
      return 'YOUR ORDERS';
    }
  }
  onDeliver(id: number, order: Order) {
    this.orderService.updateOrder(id, order).subscribe(
      (data) => {
        console.log('Update');
        this.getOrders();
      },
      (error) => console.log(error)
    );
    
  }
}
