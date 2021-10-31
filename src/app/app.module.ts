import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LatestComponent } from './latest/latest.component';
import { TopComponent } from './top/top.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { TrendingComponent } from './trending/trending.component';
import { BestRatingComponent } from './best-rating/best-rating.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LatestComponent,
    TopComponent,
    UpcomingComponent,
    SuggestedComponent,
    TrendingComponent,
    BestRatingComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
