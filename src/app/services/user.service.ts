import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  onLogin(account: string) {
    debugger
    return this.http.get('/api/user/' + account)
      .map(res => res.json());
  }

}
