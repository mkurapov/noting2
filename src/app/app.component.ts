import { Component, OnInit } from '@angular/core';
import { NoteService } from './app.note.service';
import { Note } from './interfaces/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/app.component.scss'],
  providers: [NoteService]
})

export class AppComponent {
  public _notes: Note[]
  private _currentNote: Note;

  constructor(private noteService: NoteService){}

  ngOnInit(){
    this._notes = this.noteService.getNotes();
    this._currentNote = this._notes[0];
  }

  getNoteSelected(newSelectedNote: Note)
  {
    this._currentNote = newSelectedNote;
  }
}
