import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalcParamsService } from '../services/calc-params.service';

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
  selectedPhoto : any;
  selectedMaterial : any;

  constructor(public fb: FormBuilder, @Inject(CalcParamsService) public service : CalcParamsService) {
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
      },
      {
        name : 'Штукатурка2 test' ,
        cost : 250,
        id : 'plast'
      }
    ];

    this.totalCost = 0;
    this.selectedPhoto = {name :'',cost:0};
    this.selectedMaterial = {cost:0}
    this.height = 100;
    this.width = 200;

    this.service.photoUpdated.subscribe(photo => {
      this.selectedPhoto = photo;
      this.recountTotalCost();
    })

    fb.control({
      
    })

   }

  ngOnInit() {
    this.height = this.height ? parseInt(this.height.toString()) : null;
    this.width = this.width ? parseInt(this.width.toString()) : null ;
    
    this.recountTotalCost();
  }

  public recountTotalCost() : void {
    this.totalCost = this.selectedPhoto.cost + this.selectedMaterial.cost;
  }

  public materailSelected(material : any ) : boolean {
    this.selectedMaterial = material;
    this.recountTotalCost();
    return true;
  }

  public makeOwnMaket() : void {
    console.log('makeOwnMaket')
  }

  public moreAboutMaterial( material : Object ) : void {
    console.log('more about material:',material);
  }

  public buyWallper() : void {
    let buyObject : any = {};
    buyObject.Photo = {
      cost : this.selectedPhoto.cost,
      id : this.selectedPhoto.id,
      name : this.selectedPhoto.name,
      url : this.selectedPhoto.url
    };
    buyObject.Material = this.selectedMaterial;
    buyObject.width = `${this.width}cм`;
    buyObject.height = `${this.height}cм`;

    console.log('buy wallper:', buyObject);
  }

}
