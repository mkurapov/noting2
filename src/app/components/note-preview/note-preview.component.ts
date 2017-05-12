import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../interfaces/Note';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['../../../styles/note-preview.component.scss']
})
export class NotePreviewComponent implements OnInit {

  @Input() _note: Note;
  @Output() onNoteSelected: EventEmitter<any> = new EventEmitter();

  private isSelected : boolean = false;

  ngOnInit() {
  }

  noteSelected(note: Note)
  {
    this.onNoteSelected.emit(note);
  }

}
