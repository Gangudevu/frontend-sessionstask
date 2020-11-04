import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService 
{
  constructor(private httpClient:HttpClient) 
  { }

  getNotes():Observable<Note[]>
  {
    return this.httpClient.get<Note[]>('http://localhost:3000/notes');
  }

  addNote(note:Note)
  {
    return this.httpClient.post<Note>('http://localhost:3000/notes',note);
  }
}
