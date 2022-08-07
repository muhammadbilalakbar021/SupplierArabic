import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css',
  ]
})
export class ProductsComponent implements OnInit {
  @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent | any;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    { img: 'assets/imgs/theme/icons/category-1.svg' },
    { img: 'assets/imgs/theme/icons/category-2.svg' },
    { img: 'assets/imgs/theme/icons/category-3.svg' },
    { img: 'assets/imgs/theme/icons/category-4.svg' },
    { img: 'assets/imgs/theme/icons/category-5.svg' },
    { img: 'assets/imgs/theme/icons/category-6.svg' },
    { img: 'assets/imgs/theme/icons/category-7.svg' },
    { img: 'assets/imgs/theme/icons/category-8.svg' },
    { img: 'assets/imgs/theme/icons/category-9.svg' },
    { img: 'assets/imgs/theme/icons/category-11.svg' },
  ];
  slideConfig = {
    slidesToShow: 5, slidesToScroll: 2, arrows: true,
  };

  addSlide() {
    this.slides.push({ img: 'assets/image/Slick/slick.jpg' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  next() {
    console.log('hello');
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

}
