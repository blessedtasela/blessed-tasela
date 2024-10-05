import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';
import { EducationModalComponent } from './education-modal/education-modal.component';
import { ResumeModalComponent } from './resume-modal/resume-modal.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatDialogModule } from '@angular/material/dialog';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from './icons/icons.module';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { MariamComponent } from './mariam/mariam.component';
import { BerlizComponent } from './berliz/berliz.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { VotingComponent } from './voting/voting.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { BerlizDetailsComponent } from './berliz-details/berliz-details.component';
import { MariamDetailsComponent } from './mariam-details/mariam-details.component';
import { YoutubeDetailsComponent } from './youtube-details/youtube-details.component';
import { VotingDetailsComponent } from './voting-details/voting-details.component';
import { TestimonialDetailsComponent } from './testimonial-details/testimonial-details.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MiniEcomJqueryComponent } from './mini-ecom-jquery/mini-ecom-jquery.component';
import { MiniEcomJqueryDetailsComponent } from './mini-ecom-jquery-details/mini-ecom-jquery-details.component';
import { FightFusionComponent } from './fight-fusion/fight-fusion.component';
import { FightFusionDetailsComponent } from './fight-fusion-details/fight-fusion-details.component';
import { MusicUiComponent } from './music-ui/music-ui.component';
import { MusicUiDetailsComponent } from './music-ui-details/music-ui-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactModalComponent,
    ExperienceModalComponent,
    EducationModalComponent,
    ResumeModalComponent,
    ExamplePdfViewerComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    MariamComponent,
    BerlizComponent,
    YoutubeComponent,
    VotingComponent,
    ContactComponent,
    EducationComponent,
    ServicesComponent,
    TestimonialComponent,
    ScrollToTopComponent,
    BerlizDetailsComponent,
    MariamDetailsComponent,
    YoutubeDetailsComponent,
    VotingDetailsComponent,
    TestimonialDetailsComponent,
    LandingComponent,
    ProjectsComponent,
    PortfolioComponent,
    MiniEcomJqueryComponent,
    MiniEcomJqueryDetailsComponent,
    FightFusionComponent,
    FightFusionDetailsComponent,
    MusicUiComponent,
    MusicUiDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    MatDialogModule,
    FeatherModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ExamplePdfViewerComponent]
})
export class AppModule { }
