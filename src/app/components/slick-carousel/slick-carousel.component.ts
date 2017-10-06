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
  ngOnInit() {
  }

  initialized = false;

  initCarousel() {
    this.zone.runOutsideAngular(() => {
      this.$carousel = $(this.el.nativeElement).slick(
        this.options    
      );
    });

    this.initialized = true;
  }

  addSlide(slide) {
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
  }
}