import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModalComponent } from './about-modal/about-modal.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';
import { EducationModalComponent } from './education-modal/education-modal.component';
import { ResumeModalComponent } from './resume-modal/resume-modal.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatDialogModule } from '@angular/material/dialog';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from './icons/icons.module';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutModalComponent,
    ContactModalComponent,
    ExperienceModalComponent,
    EducationModalComponent,
    ResumeModalComponent,
    ExamplePdfViewerComponent,
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
