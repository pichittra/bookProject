import { Component, OnInit } from '@angular/core';
import { FrontService } from '../../services/front.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  detail:any;
  constructor(private frontService: FrontService) {
    this.detail = this.frontService.detailBook;
    console.log(this.detail)
   }

  ngOnInit() {
  }

}
