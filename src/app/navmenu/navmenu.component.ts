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

  over() {
    this.textileIsOpen = true;
  }

  leave() {
    this.textileIsOpen = false;
  }

  handleClick(event) {
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) 
      {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent && inside == false);

    if (inside) 
    {    } 
    else 
    {
      this.isIn = false;
    }
  }
}
