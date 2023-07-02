import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDishService } from 'src/app/data-storage/data.dish.service';
import { DataMenuService } from 'src/app/data-storage/data.menu.service';
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent implements OnInit {
  // @ViewChild('f') formObject: NgForm;
  currentImagePath: String = null;
  id: number;
  // value = null;
  isUpdate = false;

  menu: Menu = new Menu();

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log('hello');
    } else {
      console.log('Bye');
      this.isUpdate = true;
    }
    this.menuService.getMenuById(this.id).subscribe(
      (data) => {
        this.menu = data;
      },
      (error) => console.log(error)
    );
    // throw new Error('Method not implemented.');
    // this.value = this.formObject.value;
    // this.currentImagePath = this.value.path;
  }

  onclickAddOrUpdate() {
    console.log('HHHHHHHHHH');
    // this.value = this.formObject.value;
    // this.currentImagePath = this.value.path;
    // this.menuService.createMenu(
    //   new Menu(
    //     1,
    //     this.value.name,
    //     this.value.description,
    //     this.value.path,
    //     this.value.price
    //   )
    // );
    // console.log(this.value.name);
    // this.dataMenuService.storeMenus();
    if (this.id) {
      console.log('update');
      this.menuService.updateMenu(this.id, this.menu).subscribe(
        (data) => {},
        (error) => console.log(error)
      );
    } else {
      this.menuService.createMenu(this.menu).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
    }
    this.menuService.refreshMenu.emit(true);
    this.router.navigate(['/popup']);
    // this.router.navigate(['/menu']);
    // window.location.href = '/menu';
  }
}
