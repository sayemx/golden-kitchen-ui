import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular//common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';

import { CartComponent } from './cart/cart.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DishComponent } from './dish/dish.component';
import { AddDishComponent } from './dish/add-dish/add-dish.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './shared/auth.interceptor.service';
import { AdminComponent } from './admin/admin.component';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';
import { CustomerDetailsComponent } from './admin/customer-details/customer-details.component';
import { SupplierDetailsComponent } from './admin/supplier-details/supplier-details.component';
import { FilterPipe } from './shared/filter.pipe';
import { PopUpComponent } from './shared/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    SignupComponent,
    AboutComponent,
    OrderComponent,
    CartComponent,
    AddMenuComponent,
    DishComponent,
    AddDishComponent,
    LoginComponent,
    AdminComponent,
    OrderDetailsComponent,
    CustomerDetailsComponent,
    SupplierDetailsComponent,
    FilterPipe,
    PopUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
