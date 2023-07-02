import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomerDetailsComponent } from './admin/customer-details/customer-details.component';
import { SupplierDetailsComponent } from './admin/supplier-details/supplier-details.component';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';
import { CartComponent } from './cart/cart.component';
import { AddDishComponent } from './dish/add-dish/add-dish.component';
import { DishComponent } from './dish/dish.component';
import { DishResolverService } from './dish/dish.resolver.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
// import { MenuResolverService } from './menu/menu-resolver.service';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { PopUpComponent } from './shared/pop-up/pop-up.component';

const appRotes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'order', component: OrderComponent },
  { path: 'dishes', component: DishComponent },
  { path: 'cart', component: CartComponent },
  { path: 'addmenu', component: AddMenuComponent },
  { path: 'addmenu/:id', component: AddMenuComponent },
  { path: 'adddish', component: AddDishComponent },
  { path: 'orderdetails', component: OrderDetailsComponent },
  { path: 'customerdetails', component: CustomerDetailsComponent },
  { path: 'suppliers', component: SupplierDetailsComponent },
  { path: 'popup', component: PopUpComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRotes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
