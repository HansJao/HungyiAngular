import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }
 onGetProductInfo() {
    var url = '/api/product';
    return this.http.get(url)
      .map(res => res.json()
      );
  }

   onAddProduct(productAddInfo) {
    var url = '/api/product';
    return this.http.post(url,productAddInfo)
      .map(res => res.json()
      );
  }
}
