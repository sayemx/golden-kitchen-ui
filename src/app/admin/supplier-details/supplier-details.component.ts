import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { SignupService } from 'src/app/signup/signup.service';
import { Customer } from '../customer-details/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css'],
})
export class SupplierDetailsComponent implements OnInit {
  suppliers: Customer[];
  isSupplier: boolean = false;
  isSupplierLogin: boolean = false;
  constructor(
    private signUpService: SignupService,
    private logInService: LoginService,

    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomers();
    console.log(this.suppliers);
    this.logInService.supplierLoginStatus.subscribe((data) => {
      this.isSupplierLogin = true;
    });
  }
  getCustomers() {
    this.signUpService.getCustomerList().subscribe((suppliers) => {
      this.suppliers = suppliers;
    });
    console.log(this.suppliers);
  }
  onDeleteUser(id: number) {
    console.log('deleting');
    this.signUpService.deleteCustomer(id).subscribe((suppliers: any) => {
      // console.log(data);
      this.suppliers = suppliers;
      // location.reload();
      this.getCustomers();
    });
  }

  gotoSupplierSignup() {
    this.router.navigate(['/signup']);
  }
}
