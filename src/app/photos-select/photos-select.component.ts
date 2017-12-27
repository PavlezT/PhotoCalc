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
