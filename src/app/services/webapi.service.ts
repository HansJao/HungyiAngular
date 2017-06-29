import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class WebapiService {

  constructor(private http: Http, private router: Router) { }

  onGet(uri: string) {
    let header: Headers = new Headers();
    header.append("Authorization", localStorage.getItem('userToken'));
    let options = new RequestOptions({ headers: header });
    return this.http.get(uri, options)
      .map(res => res.json())
      .catch(e => {
        if (e.status === 401) {

          this.router.navigate(['login']);
          return Observable.throw('Unauthorized');
        }
        // do any other checking for statuses here
      });
  }
  onPost(uri: string, textileAddInfo) {
    let header: Headers = new Headers();
    header.append("Authorization", localStorage.getItem('userToken'));
    header.append("Content-Type","application/json");
    let options = new RequestOptions({ headers: header });
    return this.http.post(uri, textileAddInfo, options)
      .map(res => res.json());
  }

  onPut(uri: string, textileList) {
    let header: Headers = new Headers();
    header.append("Authorization", localStorage.getItem('userToken'));
    let options = new RequestOptions({ headers: header });
    return this.http.put(uri, textileList, options)
      .map(res => res.json());
  }
}
