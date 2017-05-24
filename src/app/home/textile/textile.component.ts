import { TextileService } from './../../services/textile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textile',
  templateUrl: './textile.component.html',
  styleUrls: ['./textile.component.css']
})
export class TextileComponent implements OnInit {

  textileInfo;
  constructor(private alltextileInfo: TextileService) { }

  ngOnInit() {
    this.alltextileInfo.onGetTextile().subscribe(Info => this.textileInfo = Info);
  }
}
