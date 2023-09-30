import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent {

  constructor(private dialogRef: MatDialogRef<ContactModalComponent>) { }

  closeDialog() {
    this.dialogRef.close("Dialog closed successfully");
  }
}
