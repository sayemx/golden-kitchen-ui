import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';
// import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css', './header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  isAuthenticated = false;
  isLoggedIn = false;
  user = null;
  isAdminLogin: boolean = false;
  isSupplierLogin: boolean = false;

  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    // this.subscription = this.authService.user.subscribe((user) => {
    //   this.isAuthenticated = !!user;
    // });
    this.loginService.loginStatusSubject.subscribe((data) => {
      this.isLoggedIn = data;
    });
    this.isSupplierLogin =
      this.loginService.getUser().authorities[0].authority === 'SUPPLIER';
    if (this.loginService.getUser().username === 'admin1234') {
      this.isAdminLogin = true;
    }
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.subscribe((data) => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onLogout() {
    // this.authService.logout();
    this.loginService.logout();
    // this.isLoggedIn = false;
    // this.user = null;
    // window.location.reload();
    // this.router.navigate(['login']);
  }
  gotoOrder() {
    if (this.isLoggedIn) {
      this.router.navigate(['order']);
    } else {
      this.router.navigate(['login']);
    }
  }

  gotoOrderStatus() {
    this.router.navigate(['orderdetails']);
  }

  role() {
    if (this.isAdminLogin) {
      return 'ADMIN';
    } else if (this.isSupplierLogin) {
      return 'DELIVERER';
    } else {
      return 'CUSTOMER';
    }
  }
}
