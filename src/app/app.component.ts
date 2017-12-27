import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalcParamsService } from './services/calc-params.service';
import { window } from 'angular-bootstrap-md/utils/facade/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private route: ActivatedRoute,@Inject(CalcParamsService) public service : CalcParamsService){
    this.service.params = window.Context.params;
    console.log("Angular Context:",window.Context)
    // this.service.params.category = params['category'];
    // this.service.params.item = params['item'];
  }

  ngOnInit() {
   
  }

}
