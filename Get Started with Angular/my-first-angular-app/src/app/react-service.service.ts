import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// for example to get model of json file 
import { AngularClass } from './angular-class';

@Injectable({
  providedIn: 'root'
})
export class ReactServiceService {

  react:AngularClass[]=[
    {
      id:1,
    name:"kumar",
    designation:"SDE1",
    phone:"9837373737"
    },
    {
      id:2,
    name:"preran",
    designation:"designer",
    phone:"983788888"
    }
  ]

  public getdetails():any{
    const reactObservable = new Observable(observer=>{
      setTimeout(()=>{
        observer.next(this.react)
      },1000)
    })
    return reactObservable;
  }
  constructor() { }
}
