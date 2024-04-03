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
