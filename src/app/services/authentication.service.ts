import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService {
    public token: string;
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {

        return this.http.post('/api/user', { userAccount: username, userPassword: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                debugger;
                let token = response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', username + ":" + token);

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
        localStorage.removeItem('currentUser');
    }

    onGet(uri: string, parameter: string) {
        let header: Headers = new Headers();
        header.append("Authorization", localStorage.getItem('currentUser'));
        let options = new RequestOptions({ headers: header });
        return this.http.get(uri, options)
            .map(res => res.json());
    }
    onPost() {

    }

}
