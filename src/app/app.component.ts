import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import {  ApplicationError } from 'src/shared/shared/error/custom-error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Error-handling-with-custom-error-class';
  ngOnInit(){
    //const error = new Error();
    //error.message = "fehler";
    //throwError(new ApplicationError("hi im an error"));
    //Observable.throw(new ApplicationError("hi im an error"));
    
    throw new ApplicationError("hi im an error");
  }
  
}
