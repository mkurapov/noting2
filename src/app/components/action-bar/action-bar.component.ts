import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['../../../styles/action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Output() onAddNote: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addNote() {
      this.onAddNote.emit();
  }

}
