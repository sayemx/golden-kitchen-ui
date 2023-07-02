import { Menu } from './menu.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MenuService {
  menuChnaged = new Subject<Menu[]>();
  // addCart = new Subject<Menu>();
  refreshMenu: EventEmitter<boolean> = new EventEmitter();
  menus: Menu[];
  cart: Menu[];
  order = new Array();
  price: number;

  private baseURL = environment.baseUrl + '/food/foodItems';

  constructor(private httpClient: HttpClient) {}

  getMenuList(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.baseURL}`);
  }

  createMenu(menu: Menu): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, menu);
  }

  getMenuById(id: number): Observable<Menu> {
    return this.httpClient.get<Menu>(`${this.baseURL}/${id}`);
  }

  updateMenu(id: number, menu: Menu): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, menu);
  }

  deleteMenu(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  // : Menu[] = [
  //   new Menu(
  //     1,
  //     'Pizza',
  //     'Consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato',
  //     'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
  //     '480'
  //   ),
  //   new Menu(
  //     2,
  //     'Burger',
  //     'A super tasty burger with meat and cheese',
  //     'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/urmwv5j8vlt6gvqh5osj',
  //     '280'
  //   ),
  //   new Menu(
  //     3,
  //     'Tortilla',
  //     'Round, thin, flat bread of Mexico made from unleavened cornmeal or, less commonly, wheat flour. ',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJLTiI5SwBaqCLXYERXUNSwCyHJLo-FJmeA&usqp=CAU',
  //     '180'
  //   ),
  //   new Menu(
  //     4,
  //     'Waffle',
  //     'Crisp raised cake baked in a waffle iron, a hinged metal griddle with a honeycombed.',
  //     'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_belgian-style-waffles_16700_760x580.jpg?ext=.jpg',
  //     '380'
  //   ),
  //   new Menu(
  //     5,
  //     'Pancake',
  //     'It is a thin, flat, circular piece of cooked batter made from milk, flour, and eggs.',
  //     'https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg',
  //     '380'
  //   ),
  // ];

  setMenus(menus: Menu[]) {
    this.menus = menus;
    this.menuChnaged.next(this.getMenus());
  }

  getMenus() {
    return this.menus.slice();
  }

  addMenu(menu: Menu) {
    this.menus.push(menu);
  }
  addCart(cart: Menu) {
    this.order.push(cart);
    console.log(this.order);
  }
  deleteMenuItem(index: number) {
    this.menus.splice(index, 1);
    this.menuChnaged.next(this.getMenus());
  }
}
