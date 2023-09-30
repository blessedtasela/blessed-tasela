import { Component } from '@angular/core';
import { ResumeModalComponent } from './resume-modal/resume-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { AboutModalComponent } from './about-modal/about-modal.component';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';
import { EducationModalComponent } from './education-modal/education-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blessed-tasela';

  constructor(private dialog: MatDialog) { }
  openResume() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.height = '600px'
  
    const dialogRef = this.dialog.open(ResumeModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
      } else {
        console.log('Dialog closed without viewing resume');
      }
    });
  }

  openContact() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '800px';
    dialogConfig.height = '300px'
  
    const dialogRef = this.dialog.open(ContactModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
      } else {
        console.log('Dialog closed without getting contact');
      }
    });
  }

  openAbout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '800px';
    dialogConfig.height = '600px'
  
    const dialogRef = this.dialog.open(AboutModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
      } else {
        console.log('Dialog closed without knowing more');
      }
    });
  }

  openExperience() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '800px';
    dialogConfig.height = '600px'
  
    const dialogRef = this.dialog.open(ExperienceModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
      } else {
        console.log('Dialog closed without checking experience');
      }
    });
  }

  openEducation() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '800px';
    dialogConfig.height = '500px'
  
    const dialogRef = this.dialog.open(EducationModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
      } else {
        console.log('Dialog closed without viewing education');
      }
    });
  }



  openBerliz(url: any) {
    window.open(url, '_blank');

  }
}
