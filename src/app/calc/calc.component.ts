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

  Materials : Array<any>;

  totalCost : number;

  constructor(public fb: FormBuilder) {
    this.title = '"ДОМ В ОГНЕ"'
    this.height = 100;
    this.width = 200;
    this.Materials = [
      {
        name : 'Гладкая эконом' ,
        cost : 190,
        id : 'soft'
      },
      {
        name : 'Художественный холст' ,
        cost : 300,
        id : 'canvas'
      },
      {
        name : 'Штукатурка' ,
        cost : 250,
        id : 'plast'
      }
    ];
    this.totalCost = 255;

    fb.control({
      
    })

   }

  ngOnInit() {
    this.height = this.height ? parseInt(this.height.toString()) : null;
    this.width = this.width ? parseInt(this.width.toString()) : null ;
  }

  public makeOwnMaket() : void {
    console.log('makeOwnMaket')
  }

  public materailSelected(material : Object ) : boolean {
    console.log('materail selected:',material);
    return true;
  }

  public moreAboutMaterial( material : Object ) : void {
    console.log('more about material:',material);
  }

  public buyWallper() : void {
    console.log('buy wallper:', this.totalCost);
  }

}
