import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthenticationService } from "app/services/authentication.service";

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  host: {
    '(document:click)': 'handleClick($event)',
  },
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  isLogin: boolean = false;
  public elementRef;
  isIn = false;   // store state
  textileIsOpen = false;
  customerIsOpen = false;
  constructor(private authService: AuthenticationService, myElement: ElementRef) {
    this.elementRef = myElement;
  }

  ngOnInit() {
    this.authService.tokenEmit.subscribe(token => this.isLogin = token != null);
  }

  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  over(activeName: any) {
    if (activeName == "textile") {
      this.textileIsOpen = true;
    } else {
      this.customerIsOpen = true;
    }
  }

  leave(activeName: any) {
    if (activeName == "textile") {
      this.textileIsOpen = false;
    } else {
      this.customerIsOpen = false;
    }
  }

  handleClick(event) {
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent && inside == false);

    if (inside)
    { }
    else {
      this.isIn = false;
    }
  }
}
