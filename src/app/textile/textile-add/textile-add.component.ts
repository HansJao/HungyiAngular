import { TextileService } from './../../services/textile.service';
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
  textileDefault: any = [];
  textileSample;
  constructor(private _fb: FormBuilder, private textileService: TextileService) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      //name: ['', [Validators.required, Validators.minLength(5)]],
      textile: this._fb.array([])
    });
    this.textileService.onGetProductInfo().subscribe(product => {
      this.textileSample = product;
    });

    // add address
    // this.addAddress();

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
      productID: [this.textileDefault.productID],
      textileName: [this.textileDefault.productName],
      textileColor: [''],
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

  save(model) {
    // call API to save
    // ...
    this.textileService.onAddTextile(model.value.textile).subscribe(s=>console.log(s));
  }

}