import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosSelectComponent } from './photos-select.component';

describe('PhotosSelectComponent', () => {
  let component: PhotosSelectComponent;
  let fixture: ComponentFixture<PhotosSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
