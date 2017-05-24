import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textile-form',
  templateUrl: './textile-form.component.html',
  styleUrls: ['./textile-form.component.css']
})
export class TextileFormComponent implements OnInit {
 @Input('group')
    public adressForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
