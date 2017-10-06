import { Component, OnInit , Input,Output ,EventEmitter } from '@angular/core';
import { FrontService } from '../../services/front.service';
import { RouterModule, ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TruncatePipe } from '../../truncate';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: any = [];
  //@Output() data = new EventEmitter ();
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
  ngOnInit() {
  }
  getDetailBook(book) {
  //  this.data.emit(book);
    this.router.navigate(['/detail',book.id]);
  }
}


