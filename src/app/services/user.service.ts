import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http,private router: Router) { }

  onLogin(account: string,password:string) {
    let header: Headers = new Headers();
    let date : Date = new Date();
    console.log(date.toLocaleString())
    header.append("Authorization", "Basic username:" + btoa("test"));
    header.append("Datetime", "date.toLocaleString()");
    header.append("Account", account);
    header.append("Password", password);
    header.append("Content-Type", "application/jaon");
    let options = new RequestOptions({ headers: header });
    //let options = new RequestOptions({ method:"",headers: headers, });
    return this.http.get('/api/user', options)
      .map(res =>{
        debugger
         res.json()
         if( res.json() != null )
         this.router.navigate(["home"]);
        });
  }

}
