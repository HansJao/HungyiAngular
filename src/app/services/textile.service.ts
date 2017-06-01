import { AuthenticationService } from './authentication.service';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TextileService {

  constructor(private http: Http, private authentication: AuthenticationService) { }
  onGetTextile() {
    var uri = '/api/textile';
    return this.authentication.onGet(uri, '');
  }

  onGetTextileByID(id: number) {
    var url = '/api/textile/' + id;
    return this.http.get(url)
      .map(res => res.json()
      );
  }
  onAddTextile(textileAddInfo) {
    var url = '/api/textile';
    return this.http.post(url, textileAddInfo)
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
