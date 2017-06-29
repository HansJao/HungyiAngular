import { WebapiService } from './../../services/webapi.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.css']
})
export class CustomerSelectComponent implements OnInit {
  customerInfo;
  constructor(private webapi: WebapiService) { }
  @Output() customerChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.webapi.onGet("/api/customer").subscribe(a => {
      this.customerInfo = a;
    });
  }
  selectedCustomers;
  onCustomerChange(customerID){
    this.selectedCustomers = customerID;
    this.customerChange.emit(customerID);
  }

}
