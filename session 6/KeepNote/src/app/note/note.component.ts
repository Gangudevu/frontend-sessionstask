import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../services/note.service';
import { RouterService } from '../services/router.service';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  inputNote: Note;

  constructor(private routerservice:RouterService) 
  {
  }

  ngOnInit(): void 
  {
  }

  openEditNote()
  {
    console.log("Note Clicked ..."+this.inputNote.id);
    this.routerservice.routeToEditNote(this.inputNote.id);
  }
}
