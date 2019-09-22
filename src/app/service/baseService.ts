import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApplicationError } from "src/shared/shared/error/custom-error";
import { ErrorService } from "./errorService";

@Injectable({'providedIn':'root'})
export class BaseService{
    constructor(private http:HttpClient,private err:ErrorService){

    }

    testApi(){
       this.http.post('https://test.com',{data:'test'}).subscribe(
           (res)=>{

           },
           (err)=>{
               this.handleError(err);
           }
       )
    }

    handleError(error:any){
        //this.err.notify('test','test1','test22');
        throw new ApplicationError('err found');
    }
    
}