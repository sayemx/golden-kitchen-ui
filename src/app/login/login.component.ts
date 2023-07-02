import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
// import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    './css/style.css',
    './css/bootstrap.min.css',
  ],
})
export class LoginComponent {
  error: string = null;
  loginData = {
    username: '',
    password: '',
  };

  @ViewChild("userName") userName;

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(form: NgForm) {
    console.log('hello');

    console.log(this.loginData);

    //request to server to generate token
    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);
        console.log('Login');

        //login...
        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log(user);
          //redirect ...ADMIN: admin-dashboard
          //redirect ...NORMAL:normal-dashboard
          if (this.loginService.getUserRole() == 'ADMIN') {
            this.loginService.loginStatusSubject.next(true);
            this.loginService.adminLoginStatus.next(true);
            console.log('admin');
            this.router.navigate(['/home']);
            // window.location.href = '/home';
          } else if (this.loginService.getUserRole() == 'NORMAL') {
            this.router.navigate(['/home']);
            // window.location.href = '/home';
            this.loginService.loginStatusSubject.next(true);
            // this.loginService.adminLoginStatus.next(false);
          } else if (this.loginService.getUserRole() == 'SUPPLIER') {
            this.router.navigate(['/home']);
            // window.location.href = '/home';
            this.loginService.loginStatusSubject.next(false);
            this.loginService.supplierLoginStatus.next(true);
            // this.loginService.adminLoginStatus.next(false);
          } else {
            this.loginService.logout();
          }
        });
        // location.reload();
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.error = 'Username or Password is wrong';
      }
    );

    // const email = form.value.email;
    // const password = form.value.password;
    // this.authService.login(email, password).subscribe(
    //   (resData) => {
    //     console.log(resData);
    //     this.router.navigate(['/home']);
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.error = 'An Error Occured';
    //   }
    // );
    // form.reset();
  }
  focusOn(){
    this.userName.nativeElement.focus();
  }
}
