import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../note/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent implements OnInit {

  note: Note;
  noteList: Note[];

  editnoteForm: FormGroup;


  constructor(
    private dialogRef:MatDialogRef<EditNoteViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private noteService: NoteService, 
    private fb: FormBuilder) 
    {
  
    this.note = new Note();
    this.noteList = []

    this.note = this.noteService.getNoteById(this.data.noteId);

    this.editnoteForm = fb.group({
      title: [this.note.title, Validators.compose([Validators.required, Validators.minLength(6)])],
      text: [this.note.text, Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  ngOnInit(): void {
  }

  editNote() 
  {
    let note = new Note();

    note.id = this.note.id;
    note.title = this.editnoteForm.value.title;
    note.text = this.editnoteForm.value.text;

    console.log(note.id);
    console.log(note.title);
    console.log(note.text);

    this.noteService.saveEditedNote(note).subscribe(
      (data) => { },
      (err) => { }
    )
    this.dialogRef.close();
    this.note = new Note();
  }
}
