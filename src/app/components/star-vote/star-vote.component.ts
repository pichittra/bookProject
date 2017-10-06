import { Component, OnInit } from '@angular/core';
import { FrontService } from '../../services/front.service';
import { BackService } from '../../services/back.service';
import { RouterModule, ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-star-vote',
  templateUrl: './star-vote.component.html',
  styleUrls: ['./star-vote.component.css']
})
export class StarVoteComponent implements OnInit {

  detail: any;
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
  vote(book, score) {
    this.detail.score = score;
    this.backService.setScoreVote(this.route.snapshot.params['bookId'], this.detail)
      .subscribe(
      detail => this.detail = detail
      );
  }
  ngOnInit() {
  }

}
