import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { CalcParamsService } from './services/calc-params.service';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { PhotoLabelComponent } from './photo-label/photo-label.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    PhotoLabelComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesign,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'dashboard', component: CalcComponent }
      ]
    )
  ],
  providers: [
    FormBuilder,
    CalcParamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
