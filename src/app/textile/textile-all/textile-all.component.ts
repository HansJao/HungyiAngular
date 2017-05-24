import { TextileService } from './../../services/textile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textile-all',
  templateUrl: './textile-all.component.html',
  styleUrls: ['./textile-all.component.css']
})
export class TextileAllComponent implements OnInit {

  textileInfo;
  constructor(private alltextileInfo: TextileService) { }

  ngOnInit() {
    this.alltextileInfo.onGetTextile().subscribe(Info => this.textileInfo = Info);
  }

}
