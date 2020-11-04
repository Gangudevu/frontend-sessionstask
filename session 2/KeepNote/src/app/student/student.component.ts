import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // sname:string;
  // sage:string;
  // scity:string;
  // scountry:string;

  stdobj: Student;

  public studentList: any[];

  constructor() {
    this.stdobj = new Student();

    // this.sname = "Tim";
    // this.sage="12";
    // this.scity="Pune";
    // this.scountry="India";
    this.stdobj.SName = "Test";
  }

  ngOnInit(): void {

    this.studentList = [
      {
        "sname": "Tim",
        "sage": 12,
        "scity": "Pune",
        "scountry": "India",
        
      },
      {
        "sname": "Rim",
        "sage": 14,
        "scity": "Bangalore",
        "scountry": "India"
      },
      {
        "sname": "Kim",
        "sage": 13,
        "scity": "Chennai",
        "scountry": "India"
      },
      {
        "sname": "Sim",
        "sage": 15,
        "scity": "London",
        "scountry": "UK"
      },
      {
        "sname": "Bim",
        "sage": 16,
        "scity": "WDC",
        "scountry": "USA"
      },
      {
        "sname": "Jim",
        "sage": 15,
        "scity": "NY",
        "scountry": "USA"
      }
    ]
  }
}
