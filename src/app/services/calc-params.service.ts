import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CalcParamsService {

  photo : {
    id : string,
    cost : number,
    url : string,
    urlSafe : string,
    name : string
  };

  photoUpdated = new EventEmitter();
  filterUpdated = new EventEmitter();
  materialUpdated = new EventEmitter();
  
  base_uri : string;

  params : any;

  constructor() {
    this.photo = null;
    this.params = {
      category : '',
      item : ''
    }
    // this.base_uri = '';
    this.base_uri = '/../wp-content/themes/fotooboi/angular/';
   }

}
