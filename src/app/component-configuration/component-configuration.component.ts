import { VerificationComponent } from './verification/verification.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-component-configuration',
  templateUrl: './component-configuration.component.html',
  styleUrls: ['./component-configuration.component.css'],
})
export class ComponentConfigurationComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(AddComponentComponent, {
      width: '350px',
      data: { }
    });
  }

}
