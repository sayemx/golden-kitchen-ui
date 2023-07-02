import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataDishService } from '../data-storage/data.dish.service';
import { Dish } from './dish.model';

@Injectable({ providedIn: 'root' })
export class DishResolverService implements Resolve<Dish[]> {
  constructor(private dataDishService: DataDishService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataDishService.fetchDishes();
  }
}
