import { TextileInfo } from './../../models/textileInfo';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-textile-add',
  templateUrl: './textile-add.component.html',
  styleUrls: ['./textile-add.component.css']
})
export class TextileAddComponent implements OnInit {
  myForm: FormGroup;
  textileDefault: TextileInfo = new TextileInfo();
  textileDefault1: TextileInfo = new TextileInfo();
  textileSample: TextileInfo[] = [];
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.textileDefault.textileColor = 'red';
    this.textileDefault.textileName = '1X1';
    this.textileDefault1.textileColor = 'black';
    this.textileDefault1.textileName = 'CVC';
    this.textileSample.push(this.textileDefault);
    this.textileSample.push(this.textileDefault1);
    console.log(this.textileSample);
    this.myForm = this._fb.group({
      //name: ['', [Validators.required, Validators.minLength(5)]],
      textile: this._fb.array([])
    });
    console.log(this.myForm)


    // add address
    this.addAddress();

    /* subscribe to addresses value changes */
    // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  onChange(textileInput: TextileInfo) {
    this.textileDefault = textileInput;
  }
  initAddress() {
    return this._fb.group({
      productID: ['', Validators.required],
      textileName: [this.textileDefault.textileName],
      textileColor: [this.textileDefault.textileColor],
      textileSpecification: [''],
      cost: [''],
      weight: [''],
      stored: [''],
      remark: ['']

    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['textile'];
    const addrCtrl = this.initAddress();

    control.push(addrCtrl);

    /* subscribe to individual address value changes */
    // addrCtrl.valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['textile'];
    control.removeAt(i);
  }

  save(model: Customer) {
    // call API to save
    // ...
    console.log(model);
  }

}

export interface Customer {
  name: string;
  addresses: Address[];
}

export interface Address {
  street: string;
  postcode: string;
}
