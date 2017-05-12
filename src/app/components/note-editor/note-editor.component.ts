import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../interfaces/Note';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['../../../styles/note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {
  @Input() _currentNote: Note;
  
  constructor() { }

  //onSubmit - when note is saved
  ngOnInit() {
  }

}
