import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FrontService } from '../../services/front.service';
import { BackService } from '../../services/back.service';
import * as moment from 'moment'
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// import { DatePipe } from '@angular/common';
// import { DatePipe } from '../../../../node_modules/@angular/common';
import { DatePipe } from '../../date-pipe';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  bookForm: FormGroup;
  category: any;
  book: any;


  createForm() {
    this.bookForm = this.fb.group({
      id: 0,
      categoryName: ['',Validators.required],
      isbn: ['',Validators.required], // <--- the FormControl called "name"
      bookName: ['',Validators.required],
      publisher: ['',Validators.required],
      price: ['',Validators.required],
      detail: ['',Validators.required],
      quantity: ['',Validators.required],
      saleDate: ['',Validators.required],
      img: [''],
    });
  }

  constructor(private fb: FormBuilder, 
    private frontService: FrontService,
    private backService: BackService,
    private parserFormatter: NgbDateParserFormatter) {

    this.frontService.getMenu().subscribe(res => {
      this.category = res;
    })
    this.createForm();
  }

  ngOnInit() {
  }

  updateBook(book) {
    //formate date
    let d = new Date(book.saleDate.year+"-"+book.saleDate.month+"-"+book.saleDate.day)
    let date = moment(d).format('YYYY-MM-DD')

    this.book = {
      categoryId: book.categoryName,
      isbn: book.isbn, // <--- the FormControl called "name"
      bookName: book.bookName,
      publisher: book.publisher,
      price: book.price,
      detail: book.detail,
      quantity: book.quantity,
      saleDate: date,
      img: book.img,
    }
    this.backService.addBook(this.book).subscribe(res => {
      this.book = res;
    });
  }

}
