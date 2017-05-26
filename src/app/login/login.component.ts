import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.user.username + " " + this.user.password)
    this.userService.onLogin(this.user.username, this.user.password).subscribe(userInfo => {
      console.log(userInfo);
      if (userInfo != null)
        this.router.navigate(["home"]);
    }
    )
  }

}
