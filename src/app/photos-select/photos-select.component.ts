import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CalcParamsService } from '../services/calc-params.service';
import { window } from 'angular-bootstrap-md/utils/facade/browser';

@Component({
  selector: 'app-photos-select',
  templateUrl: './photos-select.component.html',
  styleUrls: ['./photos-select.component.scss']
})
export class PhotosSelectComponent implements OnInit {

  Photos : Array<any>;
  selectedPhoto : any;

  constructor(private sanitizer: DomSanitizer, @Inject(CalcParamsService) public service : CalcParamsService) {
    this.Photos = window.Context.photos;

    this.Photos = this.Photos.map(photo => {
      photo.cost = parseInt(photo.cost || '0');
      try{
        photo.likes_count = photo.likes_count && photo.likes_count.length > 0 ? parseInt(photo.likes_count.substring(photo.likes_count.indexOf('data-favorites-post-count-id="') +'data-favorites-post-count-id="'.length,photo.likes_count.indexOf(' data-siteid='))) : 0;
        photo.like = (photo.like.substring(0,photo.like.indexOf('data-postid'))).indexOf('active') > -1 ? true : false;
      }catch(e){
        console.error('Invalid input Angular Context data: photos',e)
        photo.likes_count = 0;
        photo.like = false;
      }
      photo.urlSafe = this.sanitizer.bypassSecurityTrustStyle(`url('${photo.url}')`);
      return photo;
    })

    this.selectedPhoto = this.Photos[0];

   }

  ngOnInit() {
    this.selectPhoto(this.Photos[0]);
  }

  public selectPhoto(photo : any ) : void {
    if(!photo.cost || photo.cost <= 0)
      return;
    this.selectedPhoto = photo;
    this.service.photoUpdated.emit(photo);
  }

  public moreAboutPhoto(photo : any) : void {
    if(photo && photo.link && photo.link.length > 5)
      window.location.href = photo.link;
  }

}
