import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  stdobj1:Student[];

  public studentList: any[];



  constructor() 
  {
    this.stdobj1 = [];
    this.stdobj1[0].sName="Test";
    this.stdobj1[0].sAge=15;
  }

  ngOnInit(): void 
  {

    this.studentList=
    [
      {
        "sname":"Tim",
        "sage":13,
        "scity":"Bangalore",
        "scountry":"India"
      },
      {
        "sname":"Rim",
        "sage":14,
        "scity":"Pune",
        "scountry":"India"
      },
      {
        "sname":"Kim",
        "sage":15,
        "scity":"Chennai",
        "scountry":"India"
      },
      {
        "sname":"Jim",
        "sage":16,
        "scity":"NY",
        "scountry":"USA"
      },
      {
        "sname":"Sim",
        "sage":16,
        "scity":"WDC",
        "scountry":"USA"
      },
      {
        "sname":"Pat",
        "sage":15,
        "scity":"London",
        "scountry":"UK"
      }
    ]
  }
}
