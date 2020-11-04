import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './guards/route.guard';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'note',component:NoteComponent,canActivate:[RouteGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
