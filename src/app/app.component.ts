import { Component } from '@angular/core';
import { AzureItemsService } from './services/azure-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public service: AzureItemsService) {}

  get panels(): any {
    return this.service.all;
  }
}
