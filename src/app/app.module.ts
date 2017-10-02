import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontComponent } from './components/front/front.component';
import { FrontService } from './services/front.service';
import { BackService } from './services/back.service';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Http, HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import {TruncatePipe} from './truncate';
import {DatePipe} from './date-pipe';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import {DatePickerModule} from 'ng2-datepicker-bootstrap';
import { FormsModule, ReactiveFormsModule , FormControl  } from '@angular/forms';
import { SlickCarouselComponent,SlickCarouselItem  } from './components/slick-carousel/slick-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    CategoryComponent,
    TruncatePipe,
    DatePipe,
    BookDetailComponent,
    UpdateBookComponent,
    SlickCarouselComponent,
    SlickCarouselItem
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
  providers: [FrontService,BackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
