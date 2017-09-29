import { Component, OnInit ,AfterViewChecked} from '@angular/core';
import { FrontService } from '../../services/front.service';
// import * as jQuery from 'jquery';
//import 'slick-carousel';
declare var $: any;
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  books: any;
  //category: any=[];
  slides = [
    { caption: "The Piper at the Gates of Dawn" },
    { caption: "A Saucerful of Secrets" },
    { caption: "Music from the Film More" },
    { caption: "Ummagumma" },
    { caption: "Atom Heart Mother" },
    { caption: "Meddle" }
  ];
  constructor(private frontService: FrontService) {
    this.frontService.getHeadBook().subscribe(res => {
      this.books = res;
      console.log(this.books)
    })
  }
  ngAfterViewChecked() {

  }
  ngAfterViewInit(){
    $('.book-head').slick({
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: 'linear',
    });
  }
  ngOnInit() {
 

  }
  // showCategory(){
  //   this.frontService.getCategory().subscribe(res => {
  //     this.category = res;
  //     console.log(this.category);
  //   })
  // }

}
