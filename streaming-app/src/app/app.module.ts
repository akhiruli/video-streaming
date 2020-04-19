import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { SwiperModule } from 'ngx-swiper-wrapper';
// import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FixedLayoutDirective } from './directive/fixed-layout.directive';
import { PlayerComponent } from './home/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
//import { RatingModule } from 'ng-starrating';

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   direction: 'horizontal',
//   slidesPerView: 'auto'
// };

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FixedLayoutDirective,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //SwiperModule,
    NgxUsefulSwiperModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide: SWIPER_CONFIG,
    //   useValue: DEFAULT_SWIPER_CONFIG
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
