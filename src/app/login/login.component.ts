import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.user.username + " " + this.user.password)
    //this.router.navigate(["home"]);
    this.userService.onLogin(this.user.username).subscribe(userInfo =>
      console.log(userInfo)

    )
  }

}
