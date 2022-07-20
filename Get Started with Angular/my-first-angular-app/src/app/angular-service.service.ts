import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { AngularClass } from './angular-class';

@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {

  angular:AngularClass[]=
  [
    {
      id:1,
    name:"nireeksh",
    designation:"SDE1",
    phone:"9837373737"
    },
    {
      id:2,
    name:"shreyas",
    designation:"designer",
    phone:"983788888"
    }
  ]

  public getdetails():any{
    const angularObservable = new Observable(observer=>{
      setTimeout(()=>{
        observer.next(this.angular)
      },1000)
    })
    return angularObservable;
  }

  constructor() { }
}
