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
import {TruncatePipe} from './truncate';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import {DatePickerModule} from 'ng2-datepicker-bootstrap';
import { FormsModule, ReactiveFormsModule , FormControl  } from '@angular/forms';
//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    CategoryComponent,
    TruncatePipe,
    BookDetailComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FrontService],
  bootstrap: [AppComponent]
})
export class AppModule { }
