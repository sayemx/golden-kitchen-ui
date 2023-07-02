import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataMenuService } from '../data-storage/data.menu.service';
import { LoginService } from '../login/login.service';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css','./menu.component.searchbar.css'],
})
export class MenuComponent implements OnInit {
  menus: Menu[];
  filterText: string = '';
  subscription: Subscription;
  isAdminLogin: boolean = false;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    console.log(this.filterText);
    if (this.loginService.getUser().username === 'admin1234') {
      this.isAdminLogin = true;
    }
    this.getMenus();
    // this.dataMenuService.fetchMenus().subscribe();
    // this.menus = this.menuService.getMenus();
    // console.log(this.menus);
    // this.subscription = this.menuService.menuChnaged.subscribe(
    //   (menus: Menu[]) => {
    //     this.menus = menus;
    //   }
    // );
    // this.loginService.adminLoginStatus.subscribe((data) => {
    //   console.log(this.isAdminLogin);
    //   this.isAdminLogin = data;
    //   console.log('hello');
    //   console.log(this.isAdminLogin);
    // });
    this.menuService.refreshMenu.subscribe((data=>{
      if(data){
        this.getMenus();
      }
    }));
  }

  getMenus() {
    this.menuService.getMenuList().subscribe((menus) => {
      this.menus = menus;
    });
  }
  onUpdateItem(id: number) {
    this.router.navigate(['/addmenu', id]);
    console.log(this.filterText);
  }
  onDeleteMenuItem(id: number) {
    this.menuService.deleteMenu(id).subscribe((data) => {
      console.log(data);
      this.getMenus();
    });
  }

  addToCart(menu: Menu) {
    console.log('go to cart');
    console.log(menu);
    this.menuService.addCart(menu);
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  // onDeleteMenuItem(index: number) {
  //   this.menuService.deleteMenuItem(index);
  //   this.dataMenuService.storeMenus();
  // }
  // onSaveMenu() {
  //   console.log('Saving...');
  //   this.dataMenuService.storeMenus();
  // }
  // onFetchMenu() {
  //   console.log('Fetching...');
  //   this.dataMenuService.fetchMenus().subscribe();
  // }
}
