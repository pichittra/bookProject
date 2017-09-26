import { Component, OnInit } from '@angular/core';
import { FrontService } from '../../services/front.service';
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  books: any;
  //category: any=[];
  constructor(private frontService: FrontService) { }

  ngOnInit() {
   this.frontService.getHeadBook().subscribe(res => {
      this.books = res;
      console.log(this.books)
    })

  }
  // showCategory(){
  //   this.frontService.getCategory().subscribe(res => {
  //     this.category = res;
  //     console.log(this.category);
  //   })
  // }

}
