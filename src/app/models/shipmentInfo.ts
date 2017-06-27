export class ShipmentInfo {
    CustomerID:number;
    Textile: Textile[];
  }

export class Textile{
  ProductID:number;
  TextileData:TextileData[];
}
export class TextileData{
  Color:string;
  Price:number;
  TextileID:number[];
}