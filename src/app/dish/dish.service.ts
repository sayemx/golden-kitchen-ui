import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dish } from './dish.model';

@Injectable({ providedIn: 'root' })
export class DishService {
  dishChnaged = new Subject<Dish[]>();
  dishes: Dish[];
  // dishes: Dish[] = [
  //   new Dish(
  //     'Special Burger',
  //     'https://vegplatter.in/files/public/images/partner/catalog/75/veg%20burger%20with%20french%20fry.jpg',
  //     '380'
  //   ),
  //   new Dish(
  //     'KFC Fry',
  //     'https://img-global.cpcdn.com/recipes/1098274a40d6152f/680x482cq70/fried-chicken-legs-kfc-style-recipe-main-photo.jpg',
  //     '290'
  //   ),
  //   new Dish(
  //     'Murg Musallam',
  //     'https://i.ytimg.com/vi/m_lxBJVeH_I/maxresdefault.jpg',
  //     '380'
  //   ),
  //   new Dish(
  //     'Chocolate Ice',
  //     'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cgravity=auto%2Cheight=675%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=1200/wp-content/uploads/chocolate-ice-cream-day1-scaled.jpg',
  //     '380'
  //   ),
  // ];

  setDishes(dishes: Dish[]) {
    this.dishes = dishes;
  }

  getDishes() {
    return this.dishes.slice();
  }

  addDish(dish: Dish) {
    this.dishes.push(dish);
  }
  deleteDishItem(index: number) {
    this.dishes.splice(index, 1);
    this.dishChnaged.next(this.getDishes());
  }
}
