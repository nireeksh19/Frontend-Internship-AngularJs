import { Component, OnInit } from '@angular/core';
import { AngularClass } from '../angular-class';
import { AngularServiceService } from '../angular-service.service';

@Component({
  selector: 'app-angular-course',
  templateUrl: './angular-course.component.html',
  styleUrls: ['./angular-course.component.css']
})
export class AngularCourseComponent implements OnInit {

  angularcourse: AngularClass[] = [];

  constructor(private angularservice: AngularServiceService) { }

  ngOnInit(): void {

    const angularObservable = this.angularservice.getdetails();
    angularObservable.subscribe((details: AngularClass[]) => {
      this.angularcourse = details;
    })
  }

}
