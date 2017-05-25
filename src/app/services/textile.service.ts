import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TextileService {

  constructor(private http: Http, ) { }
  onGetTextile() {
    return this.http.get('/api/textile')
      .map(res => res.json()
      );
  }

  onGetTextileByID(id: number) {
    var url = '/api/textile/' + id;
    return this.http.get(url)
      .map(res => res.json()
      );
  }
   onAddTextile(textileAddInfo) {
    var url = '/api/textile';
    return this.http.post(url,textileAddInfo)
      .map(res => res.json()
      );
  }
  onGetProductInfo() {
    var url = '/api/textile/product';
    return this.http.get(url)
      .map(res => res.json()
      );
  }
}
