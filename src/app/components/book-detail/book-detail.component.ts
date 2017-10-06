import { Component, OnInit, Input , Output ,EventEmitter} from '@angular/core';
import { FrontService } from '../../services/front.service';
import { BackService } from '../../services/back.service';
import { RouterModule, ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
 // detail: any;
 category: any = [];
  @Input() detail: any;
  @Output() score = new EventEmitter ();
  constructor(private frontService: FrontService,
    private backService: BackService,
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
  vote(book, score) {
    this.detail.score = score;
    this.backService.setScoreVote(this.route.snapshot.params['bookId'], this.detail)
      .subscribe(
      detail => this.detail = detail
      );
  }
  scoreVote(book) {
    this.backService.setScoreVote(this.route.snapshot.params['bookId'], book)
      .subscribe(
      detail => this.category = detail
      );
  }
}
