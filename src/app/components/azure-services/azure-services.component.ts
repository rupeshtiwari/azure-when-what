import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { AzureService } from '../../models/dialog-data';
import { ServiceDetailComponent } from '../service-detail-dialog/service-detail.component';


@Component({
  selector: 'app-azure-services',
  templateUrl: './azure-services.component.html',
  styleUrls: ['./azure-services.component.css'],
})
export class AzureServicesComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() panels: any;

  constructor(public dialog: MatDialog) {}

  openDialog(service: AzureService): void {
    this.dialog.open(ServiceDetailComponent, {
      width: '250px',
      data: service,
      disableClose: false,
    });
  }
}
