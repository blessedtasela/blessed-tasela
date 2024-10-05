import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-modal',
  templateUrl: './resume-modal.component.html',
  styleUrls: ['./resume-modal.component.css']
})
export class ResumeModalComponent {

  blessedPdf: any = 'Blessed T - Frontend Resume.pdf';
  constructor(private dialogRef: MatDialogRef<ResumeModalComponent>) { }

  closeDialog() {
    this.dialogRef.close("Dialog closed successfully");
  }
}
