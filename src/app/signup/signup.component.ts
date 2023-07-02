import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  error: string = null;
  isAdminLogin: boolean = false;

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  public customer = {
    name: '',
    email: '',
    password: '',
    number: '',
    address: '',
  };

  constructor(
    private signupService: SignupService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    if (this.loginService.isAdminLogin()) {
      this.isAdminLogin = true;
    }
  }

  onSubmit(form: NgForm) {
    console.log('hello');
    // console.log(form.value);
    this.user.email = form.value.email;
    this.user.firstName = form.value.firstName;
    this.user.lastName = form.value.lastName;
    this.user.password = form.value.password;
    this.user.phone = form.value.phone;
    this.user.username = form.value.userName;

    this.customer.email = form.value.email;
    this.customer.name = form.value.firstName;
    this.customer.password = form.value.password;
    this.customer.number = form.value.phone;
    this.customer.address = form.value.address;
    // console.log(this.customer);
    let a = 0;

    if (this.isAdminLogin) {
      this.signupService.addSupplier(this.user).subscribe(
        (data: any) => {
          //success
          console.log(data);
          a = 6;
          alert('success adding supplier');
          if (this.isAdminLogin) {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          //error
          console.log(error);
          // alert('something went wrong in supplier code');
          this.error = 'Something went wrong';
        }
      );
    } else {
      this.signupService.addUser(this.user).subscribe(
        (data: any) => {
          //success
          console.log(data);
          a = 6;
          // alert('success');
          if (this.isAdminLogin) {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          //error
          console.log(error);
          // alert('something went wrong');
          this.error = 'Something went wrong';
        }
      );
    }

    // form.reset();

    // const email = form.value.email;
    // const password = form.value.password;
    // this.authService.signup(email, password).subscribe(
    //   (resData) => {
    //     console.log(resData);
    //     this.router.navigate(['/login']);
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.error = 'An Error Occured';
    //   }
    // );
    // form.reset();
  }
}
