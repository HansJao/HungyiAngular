import { WebapiService } from './../../services/webapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textile-shipments',
  templateUrl: './textile-shipments.component.html',
  styleUrls: ['./textile-shipments.component.css']
})
export class TextileShipmentsComponent implements OnInit {

  constructor(private webapi: WebapiService) { }
  customerInfo;
  textileNames;
  ngOnInit() {
    this.webapi.onGet("/api/customer").subscribe(a => {
      this.customerInfo = a;
      console.log(this.customerInfo)
    });
    this.webapi.onGet("/api/product").subscribe(a => {
      this.textileNames = a
      console.log(this.textileNames);
    })
  }
  selectedCustomers;
  // onSelectCustomer(selectedCustomer) {
  //   console.log(selectedCustomer);
  //   this.selectedCustomers = selectedCustomer;
  // }
  selectedTextiles: any[] = [];
  onTextileSelect(productID) {
    if (!this.selectedTextiles.includes(productID)) {
      this.selectedTextiles.push(productID);
    } else {
      let index: number = this.selectedTextiles.indexOf(productID);
      if (index !== -1) {
        this.selectedTextiles.splice(index, 1);
      }
    }

  }

  // chehckIsSelectTextile(productID): boolean {
  //   if (this.selectedTextiles.includes(productID)) {
  //     return true;
  //   }
  //   return false;
  // }
}
