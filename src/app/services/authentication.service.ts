import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthenticationService {
    public token: string;
    tokenEmit = new EventEmitter<string>();
    constructor(private http: Http, private router: Router) {
        // set token if saved in local storage
        var currentUser = localStorage.getItem('userToken');
        this.token = currentUser;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post('/api/user', { userAccount: username, userPassword: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().token;
                let userID = response.json().userID;
                console.log(userID);
                if (token) {
                    // set token property
                    this.token = token;
                    this.tokenEmit.emit(this.token.slice());
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('userToken', username + ":" + token);
                    localStorage.setItem('userID', userID);

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.tokenEmit.emit(this.token);
        localStorage.removeItem('userToken');
    }

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
