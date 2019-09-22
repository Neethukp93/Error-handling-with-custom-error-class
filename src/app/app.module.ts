import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationErrorHandler } from 'src/shared/shared/error/app-error-handler';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [{provide: ErrorHandler, useClass: ApplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
