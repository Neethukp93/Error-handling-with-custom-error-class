import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { ApplicationError } from "./custom-error";
import { ErrorService } from "src/app/service/errorService";

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  private errors: ApplicationError[] = [];
  //private errorService:ErrorService
  constructor(private errorService: ErrorService) {
    super();
  //  this.errorService = this.injector.get(ErrorService);
  }

  handleError(error: any): void {
    
    if (error instanceof ApplicationError) {
        console.log(error.message);
      //this.addError(error);
      this.errorService.notify('test','test123','test1233');
    }
    else {
      if(error.rejection instanceof ApplicationError) {
        console.log('error b');
        this.addError(error.rejection);
      }
      else {
        console.log('error c');
        super.handleError(error);
      }
    }
  }

  addError(error: ApplicationError) {
    //this.errorService.notify('test','test123','test1233');
    //this.errors.push(error);
  }
}
