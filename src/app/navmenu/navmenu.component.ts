import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "app/services/authentication.service";

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.tokenEmit.subscribe(token => this.isLogin = token != null);
  }
  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
}
