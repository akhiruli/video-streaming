import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { RestService } from 'src/app/services/rest.service';
import { ContentResponse } from 'src/app/model/interface';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  cards = [1,2,3,4,5,6,7,8, 9, 10,11,12]
  numcards = [1,2,3]
  config: SwiperOptions = {
    //pagination: { el: '.swiper-pagination', clickable: true },
    //pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 7
      },
      800: {
        slidesPerView: 6
      },
      700: {
        slidesPerView: 5
      },
      600: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };

  contentList: any[];

  constructor
  (
    private restSvc: RestService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.restSvc.getContentLists().subscribe( resp =>{
      this.contentList = resp.data;
      // console.log(resp);
      // console.log(this.contentList, this.contentList[0].category);
    })

  }

  playVideo(){
    this.router.navigate(["player"]);
  }

}
