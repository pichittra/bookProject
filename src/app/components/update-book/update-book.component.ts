import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FrontService } from '../../services/front.service';
import { BackService } from '../../services/back.service';
import * as moment from 'moment'
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
      categoryName: [''],
      isbn: [''], // <--- the FormControl called "name"
      bookName: [''],
      publisher: [''],
      price: [''],
      detail: [''],
      quantity: [''],
      saleDate: [''],
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
    // this.bookForm.setValue({
    //   id: 0,
    //   isbn: this.category.book.isbn,
    //   name: this.category.name,
    //   publisher : this.category.publisher,
    //   price: this.category.price,
    //   detail: this.category.detail,
    //   quantity : this.category.quantity,
    //   saleDate: this.category.saleDate,
    //   categoryName: this.category.categoryName,
    //   img : this.category.img
    // });
  }

  ngOnInit() {
  }

  updateBook(book) {
    console.log(book)
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
