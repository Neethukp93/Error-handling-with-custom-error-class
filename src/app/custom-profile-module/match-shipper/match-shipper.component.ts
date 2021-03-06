import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import {  Observable, Subscription } from 'rxjs';
import {  ApplicationError } from 'src/shared/shared/error/custom-error';
import { MessageService } from 'primeng/components/common/messageservice';
import { ErrorService } from 'src/app/service/errorService';
import { BaseService } from 'src/app/service/baseService';

@Component({
  selector: 'match-shipper',
  templateUrl: './match-shipper.html',
  providers :[ ]
})
export class MatchShipperComponent implements OnInit{
  title = 'Error-handling-with-custom-error-class';
  subscription: Subscription;
  constructor(private errService:ErrorService,private baseService:BaseService,private msgService:MessageService,
    private zone:NgZone){

  }
  ngOnInit(){
    //const error = new Error();
    //error.message = "fehler";
    //throwError(new ApplicationError("hi im an error"));
    //Observable.throw(new ApplicationError("hi im an error"));
    // this.msgService.add({severity:'error' , detail:'test' , summary :'testtt'})
    this.subscription = this.errService.notificationChange
    .subscribe((notification:any)=> {
      notification.key = 'myKey1';
     this.zone.run(()=>{
        
      this.msgService.add(notification);
      })
    //this.ref.detectChanges();
      //debugger;
    });
    
    // this.errService.notified.subscribe((res)=>{
    //   this.msgService.add({key: 'myKey1',severity:'error' , detail:'test' , summary :'testtt'})
    // })
    
    //throw new ApplicationError("hi im an error");
  }
  testApiError(){
   this.baseService.testApi();
   //this.errService.notify('test','test123','test1233');
  }
}
