import { TextileService } from './../../services/textile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-textile-edit',
  templateUrl: './textile-edit.component.html',
  styleUrls: ['./textile-edit.component.css']
})
export class TextileEditComponent implements OnInit {

  textileInfo;
  productID;
  editRowId: any;
  isEditTextile = [];
  constructor(private route: ActivatedRoute, private textileService: TextileService) { }
  toggle(val) {
    this.editRowId = val;
  }
  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.productID = param['id'];
      }
    );
    this.textileService.onGetTextileByID(this.productID).subscribe(Info => {
      this.textileInfo = Info;
    });
  }

  textChange(textileElement) {
    if (this.isEditTextile.includes(textileElement)) {

    } else {
      this.isEditTextile.push(textileElement)
    }
  }

}
