import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontComponent } from './components/front/front.component';
import { FrontService } from './services/front.service';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Http, HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
// import { uikit } from '../node_modules/uikit/dist/js'
// import 'jquery';
// import 'uikit/dist/js/uikit.js';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  providers: [FrontService],
  bootstrap: [AppComponent]
})
export class AppModule { }
