import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Note } from '../note/note';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  noteList: Note[];
  noteSubject: BehaviorSubject<Note[]>;

  constructor(private httpClient: HttpClient, private authservice: AuthService) {
    this.noteSubject = new BehaviorSubject([]);
  }

  fetchNoteFromServer() {
    return this.httpClient.get<Note[]>('http://localhost:3000/api/v1/notes', {
      headers: new HttpHeaders().set('Authorization', `${this.authservice.getToken()}`)
    }).subscribe(fetchednoteList => {
      this.noteList = fetchednoteList;
      this.noteSubject.next(this.noteList);
    })
  }

  getNotes(): Observable<Note[]> {
    return this.noteSubject;
  }

  getNoteById(noteId:number) 
  {
    let foundNote = this.noteList.find(note => note.id == noteId);
    return foundNote;
  }

  addNote(note: Note)
  {
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes', note, {
      headers: new HttpHeaders().set('Authorization', `${this.authservice.getToken()}`)
    }).pipe(tap(addNote => {
      this.noteList.push(addNote);
      this.noteSubject.next(this.noteList);
    }))
  }

  saveEditedNote(note: Note)
  {
    return this.httpClient.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`, note, {
      headers: new HttpHeaders().set('Authorization', `${this.authservice.getToken()}`)
    }).pipe(tap(editedNote => {
      const note = this.noteList.find(note=> note.id === editedNote.id);
      Object.assign(note,editedNote);
      this.noteSubject.next(this.noteList);
    }))
  }   
}
