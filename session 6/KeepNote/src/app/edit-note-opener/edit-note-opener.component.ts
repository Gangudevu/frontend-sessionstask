import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EditNoteViewComponent } from '../edit-note-view/edit-note-view.component';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})
export class EditNoteOpenerComponent implements OnInit {

  noteId:number;

  constructor(private dialog:MatDialog,private activatedRoute:ActivatedRoute,private routerservice:RouterService) 
  { 
    this.activatedRoute.params.subscribe(params => this.noteId = params.noteid);

    this.dialog.open(EditNoteViewComponent,{
      data:{
        noteId:this.noteId
      }
    }).afterClosed().subscribe(result=>{
      this.routerservice.routeToNote();
    })
  }

  ngOnInit(): void {
  }

}
