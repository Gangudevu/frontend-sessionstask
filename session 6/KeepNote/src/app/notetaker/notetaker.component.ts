import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../note/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notetaker',
  templateUrl: './notetaker.component.html',
  styleUrls: ['./notetaker.component.css']
})
export class NotetakerComponent implements OnInit {

  note: Note;
  noteList: Note[];

  noteForm: FormGroup;

  // noteForm:FormGroup = new FormGroup({

  //   noteTitle:new FormControl(),
  //   noteDesc:new FormControl()

  // })

  constructor(private noteService: NoteService, private fb: FormBuilder) {
    this.note = new Note();
    this.noteList = []

    this.noteForm = fb.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      text: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  ngOnInit(): void {
  }

  addNote() {

    // console.log(this.note.noteTitle);
    // console.log(this.note.noteDesc);

    if (this.noteForm.valid) {
      this.note = this.noteForm.value;
      console.log(this.note);
    }

    // this.noteList.push(this.note);
    // console.log(this.noteList);

    this.noteService.addNote(this.note).subscribe(
      (data) => { },
      (err) => { }
    )
    this.note = new Note();
  }
}
