import { ShipmentInfo, Textile, TextileData } from './../../models/shipmentInfo';
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
    });
    this.webapi.onGet("/api/product").subscribe(a => {
      this.textileNames = a
    })
  }
  selectedCustomers;
  // onSelectCustomer(selectedCustomer) {
  //   console.log(selectedCustomer);
  //   this.selectedCustomers = selectedCustomer;
  // }
  selectedTextileID: any[] = [];
  onTextileSelect(productID) {
    if (!this.selectedTextileID.includes(productID)) {
      this.selectedTextileID.push(productID);
    } else {
      let index: number = this.selectedTextileID.indexOf(productID);
      if (index !== -1) {
        this.selectedTextileID.splice(index, 1);
      }
    }
  }

  // chehckIsSelectTextile(productID): boolean {
  //   if (this.selectedTextiles.includes(productID)) {
  //     return true;
  //   }
  //   return false;
  // }
  textileInfoList: any[] = [];
  onGetSelectedTextile() {
    this.webapi.onPost("/api/textile/GetTextileByListProductID", this.selectedTextileID).subscribe(a => {
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
    console.log(this.selectedTextile);
    // var shipmentInfo = new  ShipmentInfo();
    // shipmentInfo.CustomerID = this.selectedCustomers;
    // shipmentInfo.TextileID = this.selectedTextileID;
    // this.webapi.onPost("/api/order/SendShipmentInfo", shipmentInfo).subscribe(a => {
    //   console.log(a);
    //   this.textileInfoList = a;
    // });
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


