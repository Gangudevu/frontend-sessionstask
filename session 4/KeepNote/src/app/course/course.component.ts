import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  stdobj:Student;

  courseName:string;
  constructor() 
  { 
    this.stdobj = new Student();
    this.stdobj.SName = "Test";
    this.stdobj.SAge = "12";

    this.courseName = "Fullstack Java Development !!!";
  }

  ngOnInit(): void {
  }

  // updateCourseName($event)
  // {
  //   this.courseName = $event.target.value;
  // }

}
