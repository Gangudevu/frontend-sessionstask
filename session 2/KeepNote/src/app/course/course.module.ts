import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { StudentComponent } from '../student/student.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CourseComponent,
    StudentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class CourseModule { }
