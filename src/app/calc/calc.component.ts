import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalcParamsService } from '../services/calc-params.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  Materials : Array<any>;
  Filters : Array<any>;

  height : number;
  width : number;

  totalCost : number;
  selectedPhoto : any;
  selectedMaterial : any;
  selectedFilter : any;

  constructor(public fb: FormBuilder, @Inject(CalcParamsService) public service : CalcParamsService) {
    this.Materials = [
      {
        name : 'Оригинал' ,
        cost : 0
      },
      {
        name : 'Штукатурка' ,
        cost : 190,
        url : this.service.base_uri+'assets/textures/plust.jpg',
        id : 'plust'
      },
      {
        name : 'Ракушки' ,
        cost : 230,
        url : this.service.base_uri+'assets/textures/gravi.jpg',
        id : 'rakuski'
      },
      {
        name : 'Гравий' ,
        cost : 250,
        url : this.service.base_uri+'assets/textures/gravel.jpg',
        id : 'gravel'
      }
    ];

    this.totalCost = 0;
    this.selectedPhoto = {name :'',cost:0};
    this.selectedMaterial = this.Materials[0];//{cost:0}
    this.selectedFilter = {cost:0 };
    this.height = 100;
    this.width = 200;

    this.service.photoUpdated.subscribe(photo => {
      this.selectedPhoto = photo;
      this.recountTotalCost();
    })

    this.service.filterUpdated.subscribe(filter => {
      this.selectedFilter = filter;
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
    this.totalCost = this.selectedPhoto.cost + this.selectedMaterial.cost + this.selectedFilter.cost;
  }

  public materailSelected(material : any ) : boolean {
    this.selectedMaterial = material;
    this.recountTotalCost();
    this.service.materialUpdated.emit(material);
    return true;
  }

  public moreAboutMaterial( material : Object ) : void {
    console.log('more about material:',material);
  }

  public makeOwnMaket() : void {
    console.log('makeOwnMaket');
  }

  public buyWallper() : void {
    let buyObject : any = {};
    buyObject.Photo = {
      cost : this.selectedPhoto.cost,
      // id : this.selectedPhoto.id,
      name : this.selectedPhoto.name,
      url : this.selectedPhoto.url,
      link : this.selectedPhoto.link
    };
    buyObject.Material = {
      name : this.selectedMaterial.name,
      cost : this.selectedMaterial.cost
    };
    buyObject.Filter = {
      name : this.selectedFilter.name,
      cost : this.selectedFilter.cost
    };
    buyObject.width = `${this.width}cм`;
    buyObject.height = `${this.height}cм`;

    console.log('buy wallper:', buyObject);
  }

}
