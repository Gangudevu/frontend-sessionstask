import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note: Note;
  noteList: Note[];

  constructor(private noteService: NoteService) {
    this.note = new Note();
    this.noteList = []
  }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(

      (data) => { this.noteList = data },
      (err) => { console.log(err) }

    )
  }

  addNote() {
    // console.log(this.note.noteTitle);
    // console.log(this.note.noteDesc);

    this.noteList.push(this.note);
    console.log(this.noteList);

    this.noteService.addNote(this.note).subscribe(
      (data)=>{},
      (err)=>{}
    )

    this.note = new Note();

  }

}
