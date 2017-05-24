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
  id;
  constructor(private route: ActivatedRoute, private alltextileInfo: TextileService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        console.log(param['id'])
        this.id = param['id'];
      }
    );
    this.alltextileInfo.onGetTextileByID(this.id).subscribe(Info => {
    this.textileInfo = Info;
      console.log(this.textileInfo);
    });
  }

}
