import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Menu } from '../menu/menu.model';
import { MenuService } from '../menu/menu.service';

@Injectable({ providedIn: 'root' })
export class DataMenuService {
  constructor(private http: HttpClient, private menuService: MenuService) {}

  storeMenus() {
    const menus = this.menuService.getMenus();
    console.log('Saving menus');
    this.http
      .put(
        'https://restaurant-project-6e3e0-default-rtdb.firebaseio.com/menus.json',
        menus
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchMenus() {
    return this.http
      .get<Menu[]>(
        'https://restaurant-project-6e3e0-default-rtdb.firebaseio.com/menus.json'
      )
      .pipe(
        tap((menus) => {
          this.menuService.setMenus(menus);
        })
      );
  }

  deleteMenu() {
    return this.http
      .delete(
        'https://restaurant-project-6e3e0-default-rtdb.firebaseio.com/menus.json'
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
