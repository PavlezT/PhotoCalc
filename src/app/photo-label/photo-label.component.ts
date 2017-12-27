import { Component, OnInit, Inject } from '@angular/core';
import { CalcParamsService } from '../services/calc-params.service';
import { Http, RequestOptions , Headers } from '@angular/http';

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
  Filters : Array<any>;

  constructor(@Inject(CalcParamsService) public service : CalcParamsService, public http : Http) { 
    this.currentPhoto = {urlSafe : ''};
    this.currentRoom = null;
    this.currentFilter = {id:'normal',color:'white'};
    this.currentMaterial = {id: 0,name:'original',url:''};

    this.service.photoUpdated.subscribe(photo => {
      this.currentPhoto = photo;
    });
    this.service.materialUpdated.subscribe(material => {
      this.currentMaterial = material;
    })

    this.Filters = [
      {
        name : 'Оригинал' ,
        imageSrc : this.service.base_uri+'assets/effects/mirror.jpg',
        cost : 0
      },
      {
        name : 'Негатив' ,
        cost : 190,
        color : 'white',
        imageSrc : this.service.base_uri+'assets/effects/negative.jpg',
        id : 'difference'
      },
      {
        name : 'Черно-белое' ,
        cost : 300,
        color : 'grey',
        imageSrc : this.service.base_uri+'assets/effects/monochrome.jpg',
        id : 'luminosity'
      },
      {
        name : 'Сепия' ,
        cost : 250,
        color : 'rgb(200,150,50)',
        imageSrc : this.service.base_uri+'assets/effects/sepia.jpg',
        id : 'luminosity'
      }
    ];
    // ,
    //   {
    //     name : 'Попарт' ,
    //     cost : 452,
    //     color : 'rgb(200,50,150)',
    //     imageSrc : this.service.base_uri+'assets/effects/',
    //     id : 'luminosity'
    //   }

    this.Rooms = [
      this.service.base_uri+'assets/temp1.png',
      this.service.base_uri+'assets/temp2.png',
      this.service.base_uri+'assets/temp3.png',
      this.service.base_uri+'assets/temp4.png'
    ]
  }

  ngOnInit() {
     //this.roomSelected(this.Rooms[0]);
     this.filterSelected(this.Filters[0]);
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

  public roomSelected(room) : void {
    if(!this.currentRoom)
      this.currentRoom = {id:0, url : ''};
    this.currentRoom.url = room;
    this.Rooms.map((item,i)=>{
      if(this.currentRoom.url == item)
        this.currentRoom.id = i;
    });
  }

  public moreAboutFilter( filter : Object ) : void {
    console.log('more about material:',filter);
  }

  public filterSelected(filter : any ) : boolean {
    this.currentFilter = filter;
    this.service.filterUpdated.emit(filter);
    //this.recountTotalCost();
    return true;
  }

  public likePhoto(photo) : void {
    let url = `http://printwalls.ru/wp-admin/admin-ajax.php`;
    let formData: FormData = new FormData(); 

    photo.like = photo.like ? !photo.like : true;
    let temp = {
      action: 'favorites_favorite',
      nonce: 'c2aaaa712e',//c2aaaa712e
      postid: photo.id,
      siteid: this.service.params['blog_id'],
      status: photo.like? 'active' : 'inactive',//active->liked
      logged_in: this.service.params['user_id'] && this.service.params['user_id'] != 0 ? 1 : 0,
      user_id: this.service.params['user_id'] || 0
    };

    Object.keys(temp).map(key=>{
      formData.append(key,temp[key]);
    })
    // formData.append('action', temp.action); 
    // formData.append('nonce', temp.nonce); 
    // formData.append('postid', temp.postid); 
    // formData.append('siteid', temp.siteid); 
    // formData.append('status', temp.status); 
    // formData.append('logged_in', temp.logged_in.toString()); 
    // formData.append('user_id', temp.user_id); 
    
    this.http.post(url,formData).toPromise()
      .then(res=>{
        console.log('liked status:',photo.like? 'active' : 'inactive');
      })
      .catch(err=>{
        console.error('not liked!')
      })
  }

}
