import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder , Validators } from '@angular/forms';
import { FrontService } from '../../services/front.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  bookForm: FormGroup;
  category: any;
  createForm() {
    this.bookForm = this.fb.group({
      id: 0,
      isbn: ['', Validators.required ], // <--- the FormControl called "name"
      name: ['', Validators.required ],
      publisher: ['', Validators.required ],
      price: ['', Validators.required ],
      detail: ['', Validators.required ],
      quantity: ['', Validators.required ],
      saleDate: ['', Validators.required ],
      categoryName: ['', Validators.required ],
      img: ['', Validators.required ]
    });
  }
  constructor(private fb: FormBuilder,private frontService: FrontService) { 
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

  updateBook(book){
    console.log(book);
  }

}
