import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css', '../../products/products.component.css']
})
export class ClientComponent implements OnInit {

  @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent | any;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    { img: 'https://i.ibb.co/y8R5qrp/brand-number-one-1.png' },
    { img: 'https://i.ibb.co/3WgLMfR/brand-number-two-1.png' },
    { img: 'https://i.ibb.co/Vp5Q57N/brand-number-three.png' },
    { img: 'https://i.ibb.co/LYhVKBy/brand-number-four-1.png' },
    { img: 'https://i.ibb.co/6gsyP1h/brand-number-five-1.png' },
    { img: 'https://i.ibb.co/Yt15RLr/brand-number-six-1.png' },
    { img: 'https://i.ibb.co/6WTZ118/brand-number-seven-1.png' },
    { img: 'https://i.ibb.co/QPLgPL0/brand-number-eight.png' },
    { img: 'https://i.ibb.co/FKj2H3X/svkcrypto-podcast-500x200.png' },
    { img: 'https://i.ibb.co/wd7FSnZ/brand-number-ten-1.png' },
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
