import { AuthenticationService } from './authentication.service';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TextileService {

  constructor(private http: Http, private authentication: AuthenticationService) { }
  onGetTextile() {
    var uri = '/api/textile';
    return this.authentication.onGet(uri);
  }

  onGetTextileByID(id: number) {
    var uri = '/api/textile/' + id;
    return this.authentication.onGet(uri);
  }
  onAddTextile(textileAddInfo) {
    var uri = '/api/textile';
    return this.authentication.onPost(uri, textileAddInfo);
  }
 onUpdateTextile(textileList) {
    var uri = '/api/textile/UpdateTextile';
    return this.authentication.onPost(uri, textileList);
  }

  onGetProductInfo() {
    var uri = '/api/textile/product';
    return this.authentication.onGet(uri);
  }
}
