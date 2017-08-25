import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from './app.component';
import { HomePage } from './home.page';
import { SimpleComp } from './simple-comp'
import { CheckComp } from './check-comp'
import { Check2Comp } from './check2-comp'

@NgModule({
  imports: [ IonicModule.forRoot(AppComponent),
  BrowserModule],
  declarations: [ AppComponent, HomePage, SimpleComp, CheckComp, Check2Comp ],
  entryComponents: [ HomePage, SimpleComp, CheckComp, Check2Comp ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ],
  bootstrap: [ IonicApp ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
