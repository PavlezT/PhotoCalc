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

  constructor() {
    this.photo = null;
   }

}
