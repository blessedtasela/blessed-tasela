import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BerlizComponent } from './berliz/berliz.component';
import { BerlizDetailsComponent } from './berliz-details/berliz-details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VotingDetailsComponent } from './voting-details/voting-details.component';
import { TestimonialDetailsComponent } from './testimonial-details/testimonial-details.component';
import { YoutubeDetailsComponent } from './youtube-details/youtube-details.component';
import { MariamDetailsComponent } from './mariam-details/mariam-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'berliz', component: BerlizDetailsComponent },
  { path: 'mirals', component: MariamDetailsComponent },
  { path: 'youtube-clone', component: YoutubeDetailsComponent },
  { path: 'voting-blog', component: VotingDetailsComponent },
  { path: 'testimonials', component: TestimonialDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
