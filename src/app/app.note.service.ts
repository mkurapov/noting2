import { Injectable } from '@angular/core';
import { Note } from './interfaces/Note';
import { NOTES } from './data/mock-notes';

@Injectable()
export class NoteService {
  _notes: Note[]

  constructor(){
    this._notes = NOTES;
    this.sortNotes('default');
  }

  getNotes() : Note[] {
    return this._notes;
  }

  addNote(){
    let newNote = new Note(
      "New title", 
      "New body",
      Math.floor(Math.random()*(999-100+1)+100),
      new Date()
    )

    this._notes.push(newNote);
    this.sortNotes('ascending');
  }

  sortNotes(type: string) : Note[]
  {
    return this._notes.sort((a,b) => 
    {
      if (type == 'ascending')
      {
         return a.date > b.date ? -1 : 1
      }
      else
      {
        return a.date > b.date ? 1 : -1
      } 
    })
  }


}
