import { NgModule } from '@angular/core';

import { LandingComponent } from './landing/landing.component';
import { LatestComponent } from './latest/latest.component';
import { TopComponent } from './top/top.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { TrendingComponent } from './trending/trending.component';
import { BestRatingComponent } from './best-rating/best-rating.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MainRoutingModule } from './main-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModuleModule } from '../Shared/shared-module/shared-module.module';

@NgModule({
  declarations: [ 
    LandingComponent,
    LatestComponent,
    TopComponent,
    UpcomingComponent,
    SuggestedComponent,
    TrendingComponent,
    BestRatingComponent,
    HomeComponent,
    HomeComponent,
    NavComponent,
    ContactUsComponent,
    NavComponent,
    AboutUsComponent ],
  imports: [
    MainRoutingModule,
    
    SharedModuleModule
     
    
   
    
  ]
})
export class MainModule { }
