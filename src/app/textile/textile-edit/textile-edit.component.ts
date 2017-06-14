import { TextileInfo } from './../../models/textileInfo';
import { TextileService } from './../../services/textile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-textile-edit',
  templateUrl: './textile-edit.component.html',
  styleUrls: ['./textile-edit.component.css']
})
export class TextileEditComponent implements OnInit {

  textileInfo: TextileInfo[] = [];
  productID;
  editRowId: any;
  onEditTextile = [];
  colorIsDesc = false;
  weightIsDesc = false;
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

  sortByColor() {
    this.colorIsDesc = !this.colorIsDesc;
    let direction = this.colorIsDesc ? 1 : -1;
    this.textileInfo = this.textileInfo.sort((a, b) => {
      if (a.textileColor < b.textileColor) {
        return 1 * direction;
      }
      else {
        return -1 * direction;
      }
    });
  }

  sortByWeight() {
    this.weightIsDesc = !this.weightIsDesc;
    let direction = this.weightIsDesc ? 1 : -1;
    this.textileInfo = this.textileInfo.sort((a, b) => {
      if (a.weight < b.weight) {
        return 1 * direction;
      }
      else {
        return -1 * direction;
      }
    });
  }

  selectedFilter = "Filter By";
  filterArray = ["顏色", "重量"];

  onSearch(keyword: string) {
    if (this.selectedFilter == "顏色")
      this.textileInfo = this.textileInfo.filter(a => a.textileColor.includes(keyword));
    if (this.selectedFilter == "重量")
      this.textileInfo = this.textileInfo.filter(a => a.weight.toString().includes(keyword));
  }
}
