import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { MenuService } from '../menu/menu.service';
import { Order } from './order.model';
import { OrderService } from './orderService';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  price: number = 0;
  totalItem: number = 0;
  payment: number;
  order: Order = new Order();
  constructor(
    private menuService: MenuService,
    private loginService: LoginService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.price = this.menuService.price;
    console.log(this.price);
    this.totalItem = this.menuService.order.length;
  }

  onSubmit(form: NgForm) {
    if (this.payment != this.price) {
      alert('Please pay the right price');
      return;
    }
    console.log('hello');
    console.log(form.value);
    this.order.bill = form.value.price;
    this.order.status = false;
    this.order.userName = this.loginService.getUser().username;
    console.log(this.loginService.getUser().username);
    const d = new Date();
    let text = d.toString();
    this.order.date = text;
    console.log(this.order);

    this.orderService.addOrder(this.order).subscribe(
      (data: Order) => {
        //success
        console.log(data);
        alert('Payment Successfull');
        alert('Order Placed Successfully');
        this.router.navigate(['/orderdetails']);
        // location.reload();
      },
      (error) => {
        //error
        console.log(error);
        alert('order went wrong');
        console.log(this.loginService.getToken());
      }
    );
  }
}
