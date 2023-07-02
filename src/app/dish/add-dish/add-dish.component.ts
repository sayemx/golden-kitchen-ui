import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataDishService } from 'src/app/data-storage/data.dish.service';
import { Dish } from '../dish.model';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css'],
})
export class AddDishComponent implements OnInit {
  @ViewChild('f') formObject: NgForm;
  currentImagePath: String = null;
  value = null;
  constructor(
    private dishService: DishService,
    private router: Router,
    private dataDishService: DataDishService
  ) {}

  ngOnInit(): void {
    this.value = this.formObject.value;
    this.currentImagePath = this.value.path;
  }

  onclickAdd() {
    console.log('HHHHHHHHHH');
    this.value = this.formObject.value;
    this.currentImagePath = this.value.path;
    this.dishService.addDish(
      new Dish(this.value.name, this.value.path, this.value.price)
    );
    console.log(this.value.name);
    this.dataDishService.storeDishes();
    // this.dataDishService.fetchDishes();
    this.router.navigate(['/dishes']);
  }
}
