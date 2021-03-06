import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AzureServicesComponent } from './components/azure-services/azure-services.component';
import { ServiceDetailComponent } from './components/service-detail-dialog/service-detail.component';
import { DemoMaterialModule } from './mat-module';

@NgModule({
  declarations: [AppComponent, ServiceDetailComponent, AzureServicesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [ServiceDetailComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
