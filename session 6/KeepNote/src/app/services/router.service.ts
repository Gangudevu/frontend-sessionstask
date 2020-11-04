import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService 
{
  constructor(private router:Router) { }

  routeToLogin()
  {
    this.router.navigate(['login']);
  }

  routeToNote()
  {
    this.router.navigate(['note']);
  }

  routeToNotesView()
  {
    this.router.navigate(['note/view/notesview']);
  }

  routeToEditNote(noteId)
  {
    this.router.navigate(['note',{
      outlets:{
        noteEditOutlet:['note',noteId,'edit']
      }
    }]);
  }
}
