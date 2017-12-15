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
  selectedPhoto : any;

  constructor(private sanitizer: DomSanitizer, @Inject(CalcParamsService) public service : CalcParamsService) {
    this.Photos = [
      {
        id : 'first',
        cost : 2300,
        url : 'https://homesteadandgarden.co.uk/wp-content/uploads/2015/12/Nature-Green-Garden-Road-Wide.jpg',
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
        url : 'http://webneel.com/daily/sites/default/files/images/daily/10-2013/3-nature-photography-cherry-tree.preview.jpg',
        name : '"Fire is fireplace"'
      },
      {
        id : 'fourth',
        cost : 2560,
        url : 'https://scontent.fdnk1-1.fna.fbcdn.net/v/t1.0-1/p720x720/16684123_1714534411896141_7118653729282711876_n.jpg?oh=b9aeb379899ff3b56442e24b8b61586b&oe=5ABB1383',
        name : '"Fire is fireplace"'
      },
      {
        id : 'fifth',
        cost : 2560,
        url : 'http://proshots-2.s3.amazonaws.com/ebf012ea89bc1482e9d9505a1d190c4ef97ff6c3e666c1d6564eb98a9e4d7053/640x480.jpg',
        name : '"Fire is fireplace"'
      }
    ]

    this.Photos = this.Photos.map(photo => {
      photo.urlSafe = this.sanitizer.bypassSecurityTrustStyle(`url('${photo.url}')`);
      return photo;
    })

    this.selectedPhoto = this.Photos[0];

   }

  ngOnInit() {
    this.selectPhoto(this.Photos[0]);
  }

  public selectPhoto(photo : any ) : void {
    this.selectedPhoto = photo;
    this.service.photoUpdated.emit(photo);
  }

  public moreAboutPhoto(photo : any) : void {
    console.log('more about photo:',photo);
  }

}
