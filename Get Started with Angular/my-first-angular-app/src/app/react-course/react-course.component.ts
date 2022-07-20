import { Component, OnInit } from '@angular/core';
import { AngularClass } from '../angular-class';
import { ReactServiceService } from '../react-service.service';

@Component({
  selector: 'app-react-course',
  templateUrl: './react-course.component.html',
  styleUrls: ['./react-course.component.css']
})
export class REactCourseComponent implements OnInit {

  reactcourse:AngularClass[]=[];

  constructor(private reactservice: ReactServiceService) { }

  ngOnInit(): void {

    const reactObservable = this.reactservice.getdetails();
    reactObservable.subscribe((details: AngularClass[]) => {
      this.reactcourse = details;
    })
  }

}
