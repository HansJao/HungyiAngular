import { CustomerInfo } from './../../models/customerInfo';
import { Router } from '@angular/router';
import { ShipmentInfo } from './../../models/shipmentInfo';
import { WebapiService } from './../../services/webapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textile-shipments',
  templateUrl: './textile-shipments.component.html',
  styleUrls: ['./textile-shipments.component.css']
})
export class TextileShipmentsComponent implements OnInit {

  constructor(private router: Router, private webapi: WebapiService) { }
  // customerInfo;
  productInfo;
  selectedCustomers: CustomerInfo;

  ngOnInit() {
    // this.webapi.onGet("/api/customer").subscribe(a => {
    //   this.customerInfo = a;
    // });
    this.webapi.onGet("/api/product").subscribe(a => {
      this.productInfo = a
    })
  }


  selectedProductID: any[] = [];
  onProductSelect(productID) {
    console.log(productID);
    if (!this.selectedProductID.includes(productID)) {
      this.selectedProductID.push(productID);
    } else {
      let index: number = this.selectedProductID.indexOf(productID);
      if (index !== -1) {
        this.selectedProductID.splice(index, 1);
      }
    }
  }

  textileInfoList: any[] = [];
  onGetSelectedTextile() {
    this.webapi.onPost("/api/textile/GetTextileByListProductID", this.selectedProductID).subscribe(a => {
      this.textileInfoList = a;
    });
    this.selectedTextile = [];

  }
  selectedTextile: any[] = [];
  onSelectTextile(textileID) {
    if (this.selectedTextile.includes(textileID)) {
      this.selectedTextile.splice(this.selectedTextile.indexOf(textileID), 1)
    } else {
      this.selectedTextile.push(textileID);
    }
  }

  sendShipment() {
    var userID = localStorage.getItem('userID');
    var shipmentInfo = new ShipmentInfo();
    shipmentInfo.CustomerID = this.selectedCustomers.CustomerID;
    shipmentInfo.Textile = this.selectedTextile;
    shipmentInfo.UserID = +userID;

    this.webapi.onPost("/api/order/SendShipmentInfo", shipmentInfo).subscribe(a => {
      if (a == 0) {
        alert("送出訂單失敗");
      } else {
        alert("訂單編號：" + a);
        let navigationExtras = {
          queryParams: {
            "orderID": a,
            "customerName": this.selectedCustomers.CustomerName
          }
        };
        this.router.navigate(["textile/orderresult"], navigationExtras);
      }
    });
    // console.log(shipmentInfo);
    // this.selectedTextile.filter(a => a.textileColor == "黑").forEach(a => a.price = 2000);
    // console.log(this.selectedTextile.filter(a => a.textileColor == "黑"));
    // var shipmentInfo = new ShipmentInfo();
    // shipmentInfo.CustomerID = 1;
    // shipmentInfo.Textile = new Array<Textile>();

    // var textile = new Textile();
    // textile.ProductID = 3;
    // textile.TextileData = new Array<TextileData>();

    // var textileData = new TextileData()
    // textileData.Color = "紅";
    // textileData.Price = 100;
    // textileData.TextileID = new Array<number>();
    // textileData.TextileID.push(22);

    // textile.TextileData.push(textileData);
    // shipmentInfo.Textile.push(textile);
    // shipmentInfo.Textile.push(textile);
    // shipmentInfo.Textile.push(textile);
    // shipmentInfo.Textile[shipmentInfo.Textile.findIndex(a => a.ProductID == 3)]
    //   .TextileData[shipmentInfo.Textile.find(a => a.ProductID == 3).TextileData.findIndex(a => a.Color == "紅")].Price = 200;
    // var productIDCount = shipmentInfo.Textile.filter((x, i, a) => x && a.indexOf(x) === i);
    // console.log(productIDCount);
    // console.log(shipmentInfo);
  }
  changeTextileEl: any = null;
  setPopWindow(textile) {
    this.textileInfoList
    this.changeTextileEl = textile;
  }

  textilePrice: number;
  changeTextilePrice(textile) {
    this.textileInfoList.filter(a => a.productID == textile.productID)
      .filter(a => a.textileColor == textile.textileColor)
      .forEach(a => a.price = this.textilePrice)
  }
}



