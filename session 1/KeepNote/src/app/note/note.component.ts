import { Component, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note:Note;
  noteList:Note[];

  constructor() 
  { 
    this.note = new Note();
    this.noteList=[];
  }

  ngOnInit(): void {
  }

  addNote()
  {
    // console.log(this.note.noteTitle);
    // console.log(this.note.noteDesc);

    this.noteList.push(this.note);
    console.log(this.noteList);
    this.note = new Note();
  }
}
