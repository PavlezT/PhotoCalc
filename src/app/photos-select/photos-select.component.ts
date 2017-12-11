import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CalcParamsService } from '../services/calc-params.service';

@Component({
  selector: 'app-photos-select',
  templateUrl: './photos-select.component.html',
  styleUrls: ['./photos-select.component.scss']
})
export class PhotosSelectComponent implements OnInit {

  Photos : Array<any>;

  constructor(private sanitizer: DomSanitizer, @Inject(CalcParamsService) public service : CalcParamsService) {
    this.Photos = [
      {
        id : 'first',
        cost : 2300,
        url : 'http://www.rumford.com/images/1101tgfire.jpg',
        name : '"Fire is house"'
      },
      {
        id : 'second',
        cost : 2450,
        url : 'https://www.quickenloans.com/blog/wp-content/uploads/2017/09/FirePlace.jpg',
        name : '"Fire is Fire is Fire is Fire is Fire is Fire is ass"'
      },
      {
        id : 'third',
        cost : 2560,
        url : 'http://www.offthegridnews.com/wp-content/uploads/2017/01/fireplace-a-cozy-fireplace-warrenville.jpg',
        name : '"Fire is fireplace"'
      },
      {
        id : 'fourth',
        cost : 2560,
        url : 'http://www.offthegridnews.com/wp-content/uploads/2017/01/fireplace-a-cozy-fireplace-warrenville.jpg',
        name : '"Fire is fireplace"'
      },
      {
        id : 'fifth',
        cost : 2560,
        url : 'http://www.offthegridnews.com/wp-content/uploads/2017/01/fireplace-a-cozy-fireplace-warrenville.jpg',
        name : '"Fire is fireplace"'
      }
    ]

    this.Photos = this.Photos.map(photo => {
      photo.urlSafe = this.sanitizer.bypassSecurityTrustStyle(`url('${photo.url}')`);
      return photo;
    })

   }

  ngOnInit() {
    this.selectPhoto(this.Photos[0]);
  }

  public selectPhoto(photo : any ) : void {
    this.service.photoUpdated.emit(photo);
  }

  public moreAboutPhoto(photo : any) : void {
    console.log('more about photo:',photo);
  }

}
