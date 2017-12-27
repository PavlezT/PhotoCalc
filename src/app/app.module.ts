import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { CalcParamsService } from './services/calc-params.service';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { PhotoLabelComponent } from './photo-label/photo-label.component';
import { PhotosSelectComponent } from './photos-select/photos-select.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  exports:[
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})

export class MaterialDesign {}

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    PhotoLabelComponent,
    PhotosSelectComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesign,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: ':category/:item', component: AppComponent }
      ]
    )
  ],
  providers: [
    FormBuilder,
    CalcParamsService,
    // { provide: APP_BASE_HREF, useValue : 'http://printwalls.ru/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
