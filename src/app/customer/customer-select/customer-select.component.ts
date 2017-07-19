
import { WebapiService } from './../../services/webapi.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerInfo } from "app/models/customerInfo";

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.css']
})
export class CustomerSelectComponent implements OnInit {
  customerInfo;
  constructor(private webapi: WebapiService) { }
  @Output() customerChange: EventEmitter<CustomerInfo> = new EventEmitter<CustomerInfo>();

  ngOnInit() {
    this.webapi.onGet("/api/customer").subscribe(a => {
      this.customerInfo = a;
    });
  }
  selectedCustomers;
  onCustomerChange(customerID: number, customerName: string) {
    var customerInfo = new CustomerInfo();
    customerInfo.CustomerID = customerID;
    customerInfo.CustomerName = customerName;
    this.selectedCustomers = customerID;
    this.customerChange.emit(customerInfo);
  }

}
