import { Component, OnInit, AfterViewChecked } from '@angular/core';
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
  dataFront: any = [] ;

  optionsCarousel = {
    centerMode: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 1500,
    dots: true
  };
  optionsSlideSet = {
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    infinite: true,
    adaptiveHeight: true
  }
  //category: any=[];
  constructor(private frontService: FrontService) {
   this.frontService.dataFront.subscribe(res => {
    // console.log(res)
           this.dataFront.menu = res[0];
           this.dataFront.imgHead = res[1];
           this.dataFront.newArrivals = res[2];
           this.dataFront.bestSeller = res[3];    
           console.log(this.dataFront)
    })
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
