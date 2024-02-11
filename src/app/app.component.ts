import { Component, HostListener } from '@angular/core';
import { ResumeModalComponent } from './resume-modal/resume-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { ExperienceModalComponent } from './experience-modal/experience-modal.component';
import { EducationModalComponent } from './education-modal/education-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blessed-tasela';
  menuOpen: boolean = false;
  isDarkBackground = true;

  constructor(private dialog: MatDialog) { }

  openMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openBerliz(url: any) {
    window.open(url, '_blank');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    // Calculate the percentage scrolled
    const scrollPercentage = (scrolled / (documentHeight - windowHeight)) * 100;

    // Adjust the background color mix based on the scroll percentage
    const darkBlueIntensity = 0.8; // Adjust this value for the desired mix
    const lightGrayIntensity = 1 - darkBlueIntensity;

    const mixR = darkBlueIntensity * 44 + lightGrayIntensity * 242;
    const mixG = darkBlueIntensity * 62 + lightGrayIntensity * 242;
    const mixB = darkBlueIntensity * 80 + lightGrayIntensity * 242;

    const mixColor = `rgb(${mixR}, ${mixG}, ${mixB})`;

    // Set the background color based on the scroll position
    this.isDarkBackground = scrollPercentage < 50;
  }
}
