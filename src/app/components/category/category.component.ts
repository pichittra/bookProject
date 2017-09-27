import { Component, OnInit } from '@angular/core';
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
  constructor(private frontService: FrontService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.frontService.getCategory(+params.get('categoryId')))
      .subscribe(category => this.category = category);
  }
  ngOnInit() {
  }
  getDetailBook(item){
    //console.log(item)
    this.frontService.showDetail(item);
    this.router.navigate(['/detail']);
  }
}


