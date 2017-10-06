import { Component, OnInit , Input,Output ,EventEmitter } from '@angular/core';
import { FrontService } from '../../services/front.service';
import { RouterModule, ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TruncatePipe } from '../../truncate';
import { BackService } from '../../services/back.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: any = [];
  constructor(private frontService: FrontService,
    private route: ActivatedRoute,
    private router: Router,
  private backService: BackService) {
    this.route.paramMap
          .switchMap((params: ParamMap) => 
          this.frontService.getCategory(+params.get('categoryId')))
          .subscribe(
            category => this.category = category
          );
  }
  ngOnInit() {
  }
  onClick(event,book){
    console.log("click")
    console.log(book)
    this.router.navigate(['/detail',book.id]);
  }
  scoreVote(book) {
    this.category.score = book;
    this.backService.setScoreVote(this.route.snapshot.params['bookId'], this.category)
      .subscribe(
      detail => this.category = detail
      );
  }
}


