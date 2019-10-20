import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationErrorHandler } from 'src/shared/shared/error/app-error-handler';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { EdiCancelComponent } from './edi-cancel/edi-cancel.component';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

//import { CustomProfileModule } from './custom-profile-module/custom-profile.module';
const routes : Routes = [{path:'',component:AppComponent},
{path:'accs' , loadChildren : './custom-profile-module/custom-profile.module#CustomProfileModule'},
{path:'edi-cancel',component:EdiCancelComponent}]
@NgModule({
  declarations: [
    AppComponent,
    EdiCancelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   // CustomProfileModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    TabViewModule,
    TableModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: ErrorHandler, useClass: ApplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
