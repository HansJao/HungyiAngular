import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // var productInfo = [{ ProductName: '菜瓜布' }, { ProductName: 'TC1*1' }]
    // this.productService.onAddProduct(productInfo).subscribe(info => console.log(info));
  }

  onAddProduct(productName: string) {
    var productInfo = [{ ProductName: productName }];
    console.log(productName);
    this.productService.onAddProduct(productInfo).subscribe(info => console.log(info));
  }

}
