import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { RouteGuard } from './guards/route.guard';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';
import { NotesviewComponent } from './notesview/notesview.component';

const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'note',component:DashboardComponent,canActivate:[RouteGuard],
  children:
  [
    {path:'', redirectTo:'view/notesview', pathMatch:'full'},
    {path:'view/notesview',component:NotesviewComponent},
    {path:'note/:noteid/edit',component:EditNoteOpenerComponent,outlet:'noteEditOutlet'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
