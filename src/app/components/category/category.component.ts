import { Component, OnInit } from '@angular/core';
import { FrontService } from '../../services/front.service';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import {TruncatePipe} from '../../truncate';
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
      this.frontService.getCategory(this.route.snapshot.params['categoryId']).subscribe(res => {
        this.category = res;
      //  console.log(this.category);
      })
     }
  ngOnInit() {
  }

}


