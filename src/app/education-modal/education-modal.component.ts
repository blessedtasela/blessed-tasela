import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.css']
})
export class EducationModalComponent {

  constructor(private dialogRef: MatDialogRef<EducationModalComponent>) { }

  closeDialog() {
    this.dialogRef.close("Dialog closed successfully");
  }
}
