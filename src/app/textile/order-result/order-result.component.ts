import { WebapiService } from './../../services/webapi.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderDetailInfo } from "app/models/OrderDetailInfo";

@Component({
  selector: 'app-order-result',
  templateUrl: './order-result.component.html',
  styleUrls: ['./order-result.component.css']
})
export class OrderResultComponent implements OnInit {

  constructor(private route: ActivatedRoute, private webapi: WebapiService) { }
  customerName : string;
  orderDetail : Array<OrderDetailInfo>;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      var orderID = params["orderID"];
      this.customerName = params["customerName"];
      this.GetOrder(orderID);
    });
  }

  GetOrder(orderID: number) {
    this.webapi.onPost("/api/order/GetOrderDetailByOrderID", orderID).subscribe(orderDetail => {
      this.orderDetail = orderDetail as Array<OrderDetailInfo>;
      console.log(this.orderDetail);
    });
  }

}
