import { Component, OnInit, ElementRef, Directive, Host, NgZone, Input } from '@angular/core';
declare const $: any;
//import 'slick-carousel';

@Component({
  selector: 'slick-carousel',
  template: `<ng-content></ng-content>`
})
export class SlickCarouselComponent implements OnInit {

  @Input() options: [any];

  constructor(private el: ElementRef, private zone: NgZone) { }

  slides = [];
  $carousel: any;
  //$slideSet: any;
  ngOnInit() {
    console.log(this.options)
  }

  initialized = false;

  initCarousel() {
   
    this.zone.runOutsideAngular(() => {
      this.$carousel = $(this.el.nativeElement).slick(
        this.options
        
      );
     
      // this.$slideSet = $(this.el.nativeElement).slick({
      //   centerMode: true,
      //   autoplay: true,
      //   arrows: true,
      //   autoplaySpeed: 1500,
      //   dots: true,
      // });
    });

    this.initialized = true;
  }

  addSlide(slide) {
    console.log("addSlide");
    !this.initialized && this.initCarousel();
    this.$carousel.slick('slickAdd', slide.el.nativeElement);
  }
}

@Directive({
  selector: '[slick-carousel-item]',
})
export class SlickCarouselItem {
  constructor(private el: ElementRef, @Host() private carousel: SlickCarouselComponent) {
  }
  ngAfterViewInit() {
    this.carousel.addSlide(this);
   // console.log(this)
  }
  // ngOnDestroy() {
  //   this.carousel.removeSlide(this);
  // }
}