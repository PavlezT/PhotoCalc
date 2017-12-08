import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  title : string;
  height : number;
  width : number;

  constructor(public fb: FormBuilder) {
    this.title = '"House in fire"'
    this.height = null;
    this.width = null;

    fb.control({
      
    })

   }

  ngOnInit() {
    this.height = this.height ? parseInt(this.height.toString()) : null;
    this.width = this.width ? parseInt(this.width.toString()) : null ;
  }

  public my() : void {
    console.log('my func')
  }

}
