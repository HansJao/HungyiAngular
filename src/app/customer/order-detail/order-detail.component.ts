import { Component, OnInit, Input } from '@angular/core';
import { WebapiService } from "app/services/webapi.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() public set orderID(val: number) {
    if (val != null)
      this.onChangeOrderID(val)
    else
      this.orderDetailInfo = null
  }
  constructor(private webapi: WebapiService) { }

  ngOnInit() {
  }


  orderDetailInfo;
  onChangeOrderID(orderID: number) {
    this.webapi.onPost("/api/order/GetOrderDetailByOrderID", orderID).subscribe(orderDetail => {
      this.orderDetailInfo = orderDetail
    }
    );
  }

}
