import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-modal',
  templateUrl: './resume-modal.component.html',
  styleUrls: ['./resume-modal.component.css']
})
export class ResumeModalComponent {
  resume = '../../assets/CV-Blessed-software_engineer.pdf'

  constructor(private dialogRef: MatDialogRef<ResumeModalComponent>) { }

  closeDialog() {
    this.dialogRef.close("Dialog closed successfully");
  }
}
