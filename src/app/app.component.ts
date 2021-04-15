import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { AzureService } from './models/dialog-data';
import { AzureServices } from './models/panel-data';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  panels = AzureServices;
  constructor(public dialog: MatDialog) {}

  openDialog(service: AzureService): void {
    this.dialog.open(ServiceDetailComponent, {
      width: '250px',
      data: service,
      disableClose:false,
    });
  }
}
