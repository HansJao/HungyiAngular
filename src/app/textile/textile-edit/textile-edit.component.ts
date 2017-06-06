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
  onEditTextile = [];
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
    if (this.onEditTextile.includes(textileElement)) {
    } else {
      this.onEditTextile.push(textileElement)
    }
  }

  sendChange() {
    if (this.onEditTextile.length != 0) {
      this.textileService.onUpdateTextile(this.onEditTextile).subscribe(Info => {
        if (Info == true) {
          alert("更新成功");
          this.onEditTextile = [];
        }
      });
    } else {
      alert("已更新完成，還亂按什麼！");
    }
  }

}
