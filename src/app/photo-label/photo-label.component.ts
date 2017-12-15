import { Component, OnInit, Inject } from '@angular/core';
import { CalcParamsService } from '../services/calc-params.service';

@Component({
  selector: 'app-photo-label',
  templateUrl: './photo-label.component.html',
  styleUrls: ['./photo-label.component.scss']
})
export class PhotoLabelComponent implements OnInit {

  currentPhoto : any;
  currentRoom : any;
  currentFilter : any;
  currentMaterial : any;

  Rooms : Array<any>;

  constructor(@Inject(CalcParamsService) public service : CalcParamsService) { 
    this.currentPhoto = {urlSafe : ''};
    this.currentRoom = null;
    this.currentFilter = {id:'normal',color:'white'};
    this.currentMaterial = {id: 0,name:'original',url:''};

    this.service.photoUpdated.subscribe(photo => {
      this.currentPhoto = photo;
    });
    this.service.filterUpdated.subscribe(filter => {
      this.currentFilter = filter;
    })
    this.service.materialUpdated.subscribe(material => {
      this.currentMaterial = material;
    })

    this.Rooms = [
        'assets/temp1.png',
        'assets/temp2.png',
        'assets/temp3.png',
        'assets/temp4.png',
        'assets/temp5.png'
    ]
  }

  ngOnInit() {
     this.nextRoom();
  }

  public nextRoom() : void {
    if(!this.currentRoom)
      this.currentRoom = {id : 0 , url : ''};
    this.currentRoom.id = this.currentRoom.id < (this.Rooms.length-1) ? this.currentRoom.id+1 : 0;
    this.currentRoom.url = this.Rooms[this.currentRoom.id];
  }

  public prevRoom() : void {
    if(!this.currentRoom)
      this.currentRoom = {id : 0 , url : ''};
    this.currentRoom.id = this.currentRoom.id > 0 ? this.currentRoom.id-1 : this.Rooms.length-1;
    this.currentRoom.url = this.Rooms[this.currentRoom.id];
  }

  public hideRoom() : void {
    this.currentRoom = null;
  }

}
