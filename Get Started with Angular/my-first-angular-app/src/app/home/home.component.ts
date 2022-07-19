import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //String interpolation
  title = 'my-first-angular-app';
  name = 'Nireeksh';
  randomNumber = '';
  // Property binding

  image = '/assets/imag1.jpg';
  // event binding
  onClick() {
    alert('I am an event binding example !!');
  }

  onClick1() {
    console.log('I am an event binding example !!');
  }

  // *ngFor directive
  courses: Courses[] =
    [
      {
        courseid: "1",
        coursename: 'Angular Js'
      },
      {
        courseid: "2",
        coursename: 'React Js'
      },
      {
        courseid: "3",
        coursename: 'Vue Js'
      }
    ]

  // ngStyle
  mycolor: string = 'red';
  bgcolor: string = 'red';

 //ngClass
  //Using JavaScript object
  cssClass: CssClass = new CssClass();
  //ngClass using Array
  cssArray: string[] = ['red', 'size20','yellow','shadow'];

  getColor(country: any) {
    (2)
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'IN':
        return 'red';
      default:
        return 'pink';
    }
  }
  people: any[] = [
    {
      "name": "John",
      "country": 'UK'
    },
    {
      "name": "Peter",
      "country": 'USA'
    },
    {
      "name": "Shaun",
      "country": 'AUS'
    },
    {
      "name": "Paul",
      "country": 'IN'
    },
    {
      "name": "Sam",
      "country": 'USA'
    }
  ];

}
class Courses {
  courseid: string | undefined;
  coursename: string | undefined;
}

//ngClass Using JavaScript object
class CssClass {
  red: boolean = true;
  size20: boolean = true;
  yellow:boolean=true;
  shadow:boolean=true;
}

