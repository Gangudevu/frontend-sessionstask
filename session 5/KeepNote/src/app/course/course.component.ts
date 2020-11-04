import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseName:string;

  constructor() 
  { 
    this.courseName = "Development using Java!!!"
  }

  // updateCourseName($event)
  // {
  //   this.courseName = $event.target.value;
  // }

  ngOnInit(): void {
  }

}
