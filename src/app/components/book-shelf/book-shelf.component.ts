import { Component, OnInit } from '@angular/core';
import { FrontService } from '../../services/front.service';
import { RouterModule, ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css']
})
export class BookShelfComponent implements OnInit {
  category: any = [];
  constructor(private frontService: FrontService,
    private route: ActivatedRoute,
    private router: Router) {
      this.route.paramMap
      .switchMap((params: ParamMap) => 
      this.frontService.getCategory(+params.get('categoryId')))
      .subscribe(
        category => this.category = category
      );
     }
     onClick(event,book){
      this.router.navigate(['/detail',book.id]);
    }
  ngOnInit() {
  }

}
