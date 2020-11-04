import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note/note';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService 
{
  // http://localhost:3000/notes
  
  constructor(private httpClient:HttpClient,private authservice:AuthService) 
  { }

  getNotes():Observable<Note[]>
  {
    return this.httpClient.get<Note[]>('http://localhost:3000/api/v1/notes',{
      headers:new HttpHeaders().set('Authorization',`Bearer ${this.authservice.getToken()}`)
      });
  }

  addNote(note:Note)
  {
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes',note,{
      headers:new HttpHeaders().set('Authorization',`Bearer ${this.authservice.getToken()}`)
      });
  }
}
