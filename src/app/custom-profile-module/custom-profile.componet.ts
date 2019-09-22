import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import {  Observable, Subscription } from 'rxjs';
import {  ApplicationError } from 'src/shared/shared/error/custom-error';
import { MessageService } from 'primeng/components/common/messageservice';
import { ErrorService } from 'src/app/service/errorService';
import { BaseService } from 'src/app/service/baseService';

@Component({
  selector: 'custom-profile',
  templateUrl: './custom-profile.html',
  providers :[ MessageService]
})
export class CustomerProfileComponent implements OnInit{
  title = 'Error-handling-with-custom-error-class';
  subscription: Subscription;
  constructor(private errService:ErrorService,private baseService:BaseService,private msgService:MessageService,private ref:ChangeDetectorRef,
    private zone:NgZone){

  }
  ngOnInit(){}
}
