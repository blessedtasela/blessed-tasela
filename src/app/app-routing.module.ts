import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerlizDetailsComponent } from './berliz-details/berliz-details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VotingDetailsComponent } from './voting-details/voting-details.component';
import { TestimonialDetailsComponent } from './testimonial-details/testimonial-details.component';
import { YoutubeDetailsComponent } from './youtube-details/youtube-details.component';
import { MariamDetailsComponent } from './mariam-details/mariam-details.component';
import { LandingComponent } from './landing/landing.component';
import { FightFusionDetailsComponent } from './fight-fusion-details/fight-fusion-details.component';
import { MiniEcomJqueryDetailsComponent } from './mini-ecom-jquery-details/mini-ecom-jquery-details.component';
import { MusicUiDetailsComponent } from './music-ui-details/music-ui-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'home', component: LandingComponent },
  // { path: 'berliz', component: BerlizDetailsComponent },
  // { path: 'mirals', component: MariamDetailsComponent },
  // { path: 'youtube-clone', component: YoutubeDetailsComponent },
  // { path: 'fight-fusion', component: FightFusionDetailsComponent },
  // { path: 'mini-ecom', component: MiniEcomJqueryDetailsComponent },
  // { path: 'music-ui', component: MusicUiDetailsComponent },
  // { path: 'voting-blog', component: VotingDetailsComponent },
  // { path: 'testimonials', component: TestimonialDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
