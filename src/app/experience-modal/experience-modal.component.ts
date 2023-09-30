import { Component } from '@angular/core';
import { EducationModalComponent } from '../education-modal/education-modal.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['./experience-modal.component.css']
})
export class ExperienceModalComponent {

  constructor(private dialogRef: MatDialogRef<EducationModalComponent>) { }

  closeDialog() {
    this.dialogRef.close("Dialog closed successfully");
  }
}
