import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './mat-module';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

@NgModule({
  declarations: [	AppComponent,
      ServiceDetailComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
  ],
  providers: [],
  entryComponents:[ServiceDetailComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
