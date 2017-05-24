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
}
