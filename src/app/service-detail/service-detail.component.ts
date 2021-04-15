import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../models/dialog-data';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<ServiceDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ok(): void {
    this.dialogRef.close();
  }
}
