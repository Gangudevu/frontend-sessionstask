import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  noteForm:FormGroup;

  // noteForm:FormGroup = new FormGroup({

  //   noteTitle:new FormControl(),
  //   noteDesc:new FormControl()

  // })

  constructor(private noteService: NoteService, private fb:FormBuilder) 
  {
    this.note = new Note();
    this.noteList = []

    this.noteForm = fb.group({
      noteTitle:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      noteDesc:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
  }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(

      (data) => { this.noteList = data },
      (err) => { console.log(err) }

    )
  }

  addNote() 
  {

    // console.log(this.note.noteTitle);
    // console.log(this.note.noteDesc);

    if(this.noteForm.valid)
    {
      this.note = this.noteForm.value;
      console.log(this.note);
    }

    // this.noteList.push(this.note);
    // console.log(this.noteList);

    // this.noteService.addNote(this.note).subscribe(
    //   (data)=>{},
    //   (err)=>{}
    // )

    this.note = new Note();

  }

}


// FormControl, FormGroup, FormBuilder, Validators