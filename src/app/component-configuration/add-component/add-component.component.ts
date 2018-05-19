import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { VerificationComponent } from '../verification/verification.component';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {

  animal: string;
  name: string;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  onNoClick() {
    this.dialogRef.close();
  }
  openSave(): void {
    this.dialogRef.close();
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(VerificationComponent, {
      width: '350px',
      data: {
        // tslint:disable-next-line:quotemark
        "value" : 'save'
      }
    });
  }
  openDelete(): void {
    this.dialogRef.close();
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(VerificationComponent, {
      width: '350px',
      data: {
        // tslint:disable-next-line:quotemark
        "value" : 'delete'
      }
    });
  }
}
