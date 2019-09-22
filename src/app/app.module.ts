import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationErrorHandler } from 'src/shared/shared/error/app-error-handler';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
//import { CustomProfileModule } from './custom-profile-module/custom-profile.module';
const routes : Routes = [{path:'',component:AppComponent},
{path:'accs' , loadChildren : './custom-profile-module/custom-profile.module#CustomProfileModule'}]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   // CustomProfileModule,
    ToastModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: ErrorHandler, useClass: ApplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
