import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FrontService } from '../../services/front.service';
import { BackService } from '../../services/back.service';

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
    private backService: BackService) {

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
    console.log(book);
    this.book = this.backService.addBook(book);
    console.log(this.book)
  }

}
