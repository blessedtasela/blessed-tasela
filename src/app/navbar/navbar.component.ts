import { Component, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';
import { EducationModalComponent } from '../education-modal/education-modal.component';
import { ExperienceModalComponent } from '../experience-modal/experience-modal.component';
import { ResumeModalComponent } from '../resume-modal/resume-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen: boolean = false;

  constructor(private dialog: MatDialog,
    private elementRef: ElementRef) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

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

  scrollToComponent(componentId: string): void {
    const element = this.elementRef.nativeElement.querySelector('#' + componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  sendEmail(): void {
    const emailAddress = 'taselablessed@gmail.com';
    const subject = 'Book an appointment with Blessed';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  }

}
