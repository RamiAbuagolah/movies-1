import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestRatingComponent } from './best-rating/best-rating.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"best",component:BestRatingComponent},
  {path:"",component:HomeComponent} 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
