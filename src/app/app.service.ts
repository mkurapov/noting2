import { Injectable } from '@angular/core';
import { Note } from './interfaces/Note';
import { NOTES } from './data/mock-notes';

@Injectable()
export class AppService {
  notes: Note[]

  constructor(){
    this.notes = NOTES;
  }
}
