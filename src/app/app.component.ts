import { Component } from '@angular/core';
import { ResumeModalComponent } from './resume-modal/resume-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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
    dialogConfig.width = '1000px';
    dialogConfig.height = '600px'
  
    const dialogRef = this.dialog.open(ResumeModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
      } else {
        console.log('Dialog closed without updating partner');
      }
    });
  }
  openBerliz(url: any) {
    window.open(url, '_blank');

  }
}
