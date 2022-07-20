import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularCourseComponent } from './angular-course/angular-course.component';
import { CardComponent } from './card/card.component';
import { CareerComponent } from './career/career.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {  path:"",component:CarouselComponent},
  {  path:"home",component:HomeComponent},
  {path:"cards",component:CardComponent},
  {  path:"career",component:CareerComponent},
  {  path:"courses",component:CoursesComponent},
  {path:"angularcourse",component:AngularCourseComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
