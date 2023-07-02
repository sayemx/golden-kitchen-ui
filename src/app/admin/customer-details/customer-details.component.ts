import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/signup/signup.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  customers: Customer[];
  constructor(private signUpService: SignupService) {}

  ngOnInit(): void {
    this.getCustomers();
    console.log(this.customers);
  }
  getCustomers() {
    this.signUpService.getCustomerList().subscribe((customers) => {
      this.customers = customers;
    });
    console.log(this.customers);
  }
  onDeleteUser(id: number) {
    console.log('deleting');
    this.signUpService.deleteCustomer(id).subscribe((customers: any) => {
      // console.log(data);
      this.getCustomers();
    });
  }
}
