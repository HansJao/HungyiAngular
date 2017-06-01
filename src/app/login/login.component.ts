import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "app/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  loading = false;
  error = '';
  constructor(private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  onLogin() {
    console.log(this.user.username + " " + this.user.password)
    this.userService.onLogin(this.user.username, this.user.password).subscribe(userInfo => {
      console.log(userInfo);
      if (userInfo != null) {
        this.router.navigate(["home"]);
      }
      else {
        alert('帳號或密碼輸入錯誤！');
      }
    })
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.user.username, this.user.password)
      .subscribe(result => {
        debugger;
        if (result === true) {
          this.router.navigate(['home']);
        } else {
          alert('帳號或密碼輸入錯誤！');
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }

}
