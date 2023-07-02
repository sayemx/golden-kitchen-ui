import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
// import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'restaurant-prj';
  isLoggedIn!:boolean;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // this.authService.autologin();
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.loginService.loginStatusSubject.subscribe((data=>{
      this.isLoggedIn = data;
    }));
  }
}
