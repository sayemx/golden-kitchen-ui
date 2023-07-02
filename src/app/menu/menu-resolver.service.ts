// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   Resolve,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { DataMenuService } from '../data-storage/data.menu.service';
// import { Menu } from './menu.model';
// import { MenuService } from './menu.service';

// @Injectable({ providedIn: 'root' })
// export class MenuResolverService implements Resolve<Menu[]> {
//   constructor(
//     private dataMenuService: DataMenuService,
//     private menuService: MenuService
//   ) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

//     return this.dataMenuService.fetchMenus();

//   }
// }
