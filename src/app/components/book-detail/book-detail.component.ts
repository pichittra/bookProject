import { Component, OnInit } from '@angular/core';
import { FrontService } from '../../services/front.service';
import { RouterModule, ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  detail:any;
  constructor(private frontService: FrontService,
    private route: ActivatedRoute) {
      this.detail = this.route.paramMap
      .switchMap((params: ParamMap) => 
      this.frontService.showDetail(+params.get('bookId')))
      .subscribe(
        detail => this.detail = detail
      );
   }

  ngOnInit() {
  }
  vote(score){
    console.log(score)
  }
}
