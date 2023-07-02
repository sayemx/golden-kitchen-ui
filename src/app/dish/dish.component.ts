import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataDishService } from '../data-storage/data.dish.service';
import { Dish } from './dish.model';
import { DishService } from './dish.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
})
export class DishComponent implements OnInit, OnDestroy {
  dishes: Dish[];
  subscription: Subscription;

  constructor(
    private dishService: DishService,
    private dataDishService: DataDishService
  ) {}

  ngOnInit(): void {
    this.dataDishService.fetchDishes().subscribe();
    this.dishes = this.dishService.getDishes();
    console.log(this.dishes);
    this.subscription = this.dishService.dishChnaged.subscribe(
      (dishes: Dish[]) => {
        this.dishes = dishes;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDeleteDishItem(index: number) {
    this.dishService.deleteDishItem(index);
    this.dataDishService.storeDishes();
  }
}
