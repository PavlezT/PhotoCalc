import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { CalcParamsService } from './services/calc-params.service';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { PhotoLabelComponent } from './photo-label/photo-label.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  exports:[
    MatSidenavModule
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
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: CalcComponent }
      ]
    )
  ],
  providers: [CalcParamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
