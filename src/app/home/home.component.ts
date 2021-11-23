import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'ngx-useful-swiper';
import SwiperCore from "swiper/core";
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import Dictionary from '../util/dictionary';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  mySwiper: Swiper;
  index =1;
  slides = [
    'https://via.placeholder.com/300x200/FF5733/ffffff',
    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/900C3F/ffffff'
  ];

ngOnInit(){

}

  ngAfterViewInit() {
  }
  config: SwiperConfigInterface = {
    
    direction: 'horizontal',
    slidesPerView: 3,
    slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    pagination: false,
    centeredSlides: true,
    loop: true,
    roundLengths: true,
    slidesOffsetBefore: 100,
    slidesOffsetAfter: 100,
    spaceBetween: 50,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        }
    }
  };

  
}
