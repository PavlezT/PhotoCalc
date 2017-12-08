import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoLabelComponent } from './photo-label.component';

describe('PhotoLabelComponent', () => {
  let component: PhotoLabelComponent;
  let fixture: ComponentFixture<PhotoLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
