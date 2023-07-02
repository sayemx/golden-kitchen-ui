import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu/menu.model';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Menu[];
  total: number;
  order = new Array();
  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.order = this.menuService.order;
    console.log(this.order);
    let sum = 0;
    for (let i = 0; i < this.order.length; i++) {
      sum = sum + parseInt(this.order[i].price);
    }
    this.total = sum;
    this.menuService.price = this.total;
    // this.menuService.addCart.subscribe((menu) => {
    //   console.log(menu);
    // this.cart.push(menu);
    // console.log(this.cart.length);
    // let sum = 0;
    // for (let i = 0; i < this.cart.length; i++) {
    //   sum = sum + parseInt(this.cart[i].price);
    // }
    // this.total = sum;
    // });
  }

  onRemove(index: number) {
    this.total = this.total - parseInt(this.menuService.order[index].price);
    this.menuService.order.splice(index, 1);
    this.menuService.price = this.total;
  }
  onRemoveAll() {
    this.menuService.order.splice(0, this.menuService.order.length);
    this.total = 0;
    this.menuService.price = this.total;
  }
  checkout() {
    this.router.navigate(['/order']);
  }
}
