import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({'providedIn':'root'})
export class ErrorService{
    constructor(){

    }
    notified = new EventEmitter<{severity: any, summary: string, detail: string}>()
    notificationChange: Subject<Object> = new Subject<Object>();

    notify(severity: any, summary: string, detail: string) {
        //this.notified.emit({ severity, summary, detail });
      this.notificationChange.next({ severity, summary, detail });
      
    }
}

