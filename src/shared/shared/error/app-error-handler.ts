import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { ApplicationError } from "./custom-error";

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  private errors: ApplicationError[] = [];

  constructor(private injector: Injector) {
    super();
  }

  handleError(error: any): void {

    if (error instanceof ApplicationError) {
        console.log(error.message);
      this.addError(error);
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
    this.errors.push(error);
  }
}
