import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Dish } from '../dish/dish.model';
import { DishService } from '../dish/dish.service';

@Injectable({ providedIn: 'root' })
export class DataDishService {
  constructor(private http: HttpClient, private dishService: DishService) {}

  storeDishes() {
    const dishes = this.dishService.getDishes();
    console.log('Saving dishes');
    this.http
      .put(
        'https://restaurant-project-6e3e0-default-rtdb.firebaseio.com/dishes.json',
        dishes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchDishes() {
    return this.http
      .get<Dish[]>(
        'https://restaurant-project-6e3e0-default-rtdb.firebaseio.com/dishes.json'
      )
      .pipe(
        tap((dishes) => {
          this.dishService.setDishes(dishes);
        })
      );
  }
}
