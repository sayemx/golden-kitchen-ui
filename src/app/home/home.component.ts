import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  isSupplierLogin: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.isSupplierLogin =
      this.loginService.getUser().authorities[0].authority === 'SUPPLIER';
  }

  order() {
    if (this.isLoggedIn && !this.isSupplierLogin) {
      this.router.navigate(['menu']);
    } else if (this.isSupplierLogin) {
    } else {
      alert('Please Login First to continue shoupping');
    }
  }
}
