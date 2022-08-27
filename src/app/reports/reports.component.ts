import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css',
    '../../assets/css/nest/plugins/slider-range.css',
    '../../assets/css/nest/main.css',
    '../../utilities/ngx-slick.css',],
})
export class ReportsComponent implements OnInit {
  constructor(private route_: Router, private route: ActivatedRoute, public router: Router) { }

  @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent | any;
  panelOpenState = false;


  slides = [
    { img: 'assets/images/nest/theme/icons/category-1.svg' },
    { img: 'assets/images/nest/theme/icons/category-2.svg' },
    { img: 'assets/images/nest/theme/icons/category-3.svg' },
    { img: 'assets/images/nest/theme/icons/category-4.svg' },
    { img: 'assets/images/nest/theme/icons/category-5.svg' },
    { img: 'assets/images/nest/theme/icons/category-6.svg' },
    { img: 'assets/images/nest/theme/icons/category-7.svg' },
    { img: 'assets/images/nest/theme/icons/category-8.svg' },
    { img: 'assets/images/nest/theme/icons/category-9.svg' },
    { img: 'assets/images/nest/theme/icons/category-11.svg' },
  ];

  slideConfig = {
    slidesToShow: 5, slidesToScroll: 2, arrows: true,
  };

  ngOnInit(): void {
    this.route_.navigate(['./finance'], { relativeTo: this.route });
  }

  loadComponent(componentName: string) {
    console.log(componentName);
    this.route_.navigate([`${componentName.toLowerCase()}`], {
      relativeTo: this.route,
    });
  }


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

  navigateToProductDetail() {
    this.router.navigate(['product-details']);
  }
}
