import { WebapiService } from './../../services/webapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-all',
  templateUrl: './customer-all.component.html',
  styleUrls: ['./customer-all.component.css']
})
export class CustomerAllComponent implements OnInit {

  constructor(private webapi: WebapiService) { }
  customerInfo;
  editRowId: any;
  ngOnInit() {
    this.webapi.onGet("/api/customer").subscribe(a => {
      console.log(a);
      this.customerInfo = a});
  }

}
