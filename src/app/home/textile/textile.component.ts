import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textile',
  templateUrl: './textile.component.html',
  styleUrls: ['./textile.component.css']
})
export class TextileComponent implements OnInit {

  textileInfo: TextileInfo[];
  constructor() { }

  ngOnInit() {
    this.textileInfo = [
      { TextileName: "CVC", TextileDetail: [{ Color: "red", Amount: 10 }, { Color: "black", Amount: 10 }] },
      { TextileName: "TC", TextileDetail: [{ Color: "red", Amount: 2 }, { Color: "black", Amount: 3 }] },
      { TextileName: "TC", TextileDetail: [{ Color: "red", Amount: 2 }, { Color: "black", Amount: 3 }] },
      { TextileName: "TC", TextileDetail: [{ Color: "red", Amount: 2 }, { Color: "black", Amount: 3 }, { Color: "black", Amount: 10 }, { Color: "black", Amount: 10 }] },
      { TextileName: "TC", TextileDetail: [{ Color: "red", Amount: 2 }, { Color: "black", Amount: 3 }] },
      { TextileName: "TC", TextileDetail: [{ Color: "red", Amount: 2 }, { Color: "black", Amount: 3 }] },
      { TextileName: "TC", TextileDetail: [{ Color: "red", Amount: 2 }, { Color: "black", Amount: 3 }] },
      { TextileName: "TC", TextileDetail: [{ Color: "red", Amount: 2 }, { Color: "black", Amount: 3 }] },
      { TextileName: "TC", TextileDetail: [{ Color: "red", Amount: 2 }, { Color: "black", Amount: 3 }, { Color: "black", Amount: 10 }, { Color: "black", Amount: 10 }, { Color: "black", Amount: 10 }] },
      { TextileName: "TC", TextileDetail: [{ Color: "red", Amount: 2 }, { Color: "black", Amount: 3 }] },
      { TextileName: "TC", TextileDetail: [{ Color: "red", Amount: 2 }, { Color: "black", Amount: 3 }] }]
  }

}

class TextileInfo {
  TextileName: string;
  TextileDetail: TextileDetail[];
}
class TextileDetail {
  Color: string;
  Amount: number;
}
