import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { FrontService } from '../../services/front.service';
import { BackService } from '../../services/back.service';
import { RouterModule, ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-star-vote',
  templateUrl: './star-vote.component.html',
  styleUrls: ['./star-vote.component.css']
})
export class StarVoteComponent implements OnInit {
  @Input() data: any;
  @Output() score = new EventEmitter ();
  detail: any;
  constructor(private frontService: FrontService,
    private backService: BackService,
    private route: ActivatedRoute) {
  }
  vote(book, score) {
     this.data.score = score;
    this.score.emit(this.data);
  }
  ngOnInit() {
  }

}
