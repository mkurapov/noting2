import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotePreviewComponent } from './components/note-preview/note-preview.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    NotePreviewComponent,
    NoteEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
