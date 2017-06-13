import { TextileInfo } from './../../models/textileInfo';
import { TextileService } from './../../services/textile.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-textile-all',
  templateUrl: './textile-all.component.html',
  styleUrls: ['./textile-all.component.css']
})
export class TextileAllComponent implements OnInit,OnChanges {

  textileInfo: TextileInfo[] = [];
  searchTextileInfo: TextileInfo[] = [];
  constructor(private alltextileInfo: TextileService) { }

  ngOnInit() {
    this.alltextileInfo.onGetTextile().subscribe(Info => {
      this.textileInfo = Info;
      this.searchTextileInfo = Info;
    }, (err) => {
      if (err === 'Unauthorized') {
        alert('Unauthorized')
      }
    });

  }
  ngOnChanges(){
    console.log("test");
  }

  onSearch(keyword: string) {
    if (keyword != null) {
      this.textileInfo = this.searchTextileInfo.filter(a => a.textileName.includes(keyword));
    }else
    {
      this.textileInfo = this.searchTextileInfo;
    }
  }

}
