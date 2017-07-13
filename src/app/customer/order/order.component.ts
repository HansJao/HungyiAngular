import { WebapiService } from './../../services/webapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private webapi: WebapiService) { }

  ngOnInit() {

  }
  orderInfo;
  onChangeCustomer(customerID: number) {
    this.webapi.onPost("/api/order/GetOrder", customerID).subscribe(order =>
      this.orderInfo = order
    );
    this.orderID = null;
  }
  // orderDetailInfo;
  orderID: number;
  onChangeOrderID(orderID: number) {
    this.orderID = orderID;
    // this.webapi.onPost("/api/order/GetOrderDetailByOrderID", orderID).subscribe(orderDetail =>
    //   console.log(orderDetail)
    // );
  }

}
