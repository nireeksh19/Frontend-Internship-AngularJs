import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REactCourseComponent } from './react-course.component';

describe('REactCourseComponent', () => {
  let component: REactCourseComponent;
  let fixture: ComponentFixture<REactCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ REactCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(REactCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
