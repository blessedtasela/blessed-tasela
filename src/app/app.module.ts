import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModalComponent } from './about-modal/about-modal.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';
import { EducationModalComponent } from './education-modal/education-modal.component';
import { ResumeModalComponent } from './resume-modal/resume-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutModalComponent,
    ContactModalComponent,
    ExperienceModalComponent,
    EducationModalComponent,
    ResumeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
