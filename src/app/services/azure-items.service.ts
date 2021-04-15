import { Injectable } from '@angular/core';
import { AzureServices } from '../models/azure-services-data';

@Injectable({ providedIn: 'root' })
export class AzureItemsService {
  get all(): any {
    return AzureServices;
  }
}
