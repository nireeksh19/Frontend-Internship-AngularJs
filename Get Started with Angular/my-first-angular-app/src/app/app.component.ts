import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
  courses:Courses[]=
  [
    {
      courseid:"1",
      coursename:'Angular Js'
    },
    {
      courseid:"2",
      coursename:'React Js'
    },
    {
      courseid:"3",
      coursename:'Vue Js'
    }
  ]

  // ngStyle
  mycolor:string='red';
 bgcolor:string='red';

//  ngClass
// cssprop:string='violet size24';
// css:CSSClass= new CSSClass();
// cssprop:string[]=['violet','size24'];

}
class Courses{
courseid:string | undefined;
coursename:string | undefined;
}

// class CSSClass{
//   red:boolean=true;
//   size24:boolean=true;
// }