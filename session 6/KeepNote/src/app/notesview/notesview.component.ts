import { Component, OnInit } from '@angular/core';
import { Note } from '../note/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notesview',
  templateUrl: './notesview.component.html',
  styleUrls: ['./notesview.component.css']
})
export class NotesviewComponent implements OnInit {

  noteList: Note[];

  constructor(private noteService: NoteService) {

  }

  ngOnInit(): void 
  {
    this.noteService.getNotes().subscribe(
      (data) => { this.noteList = data },
      (err) => { console.log(err) }
    )
  }
}
