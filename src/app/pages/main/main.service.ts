import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { NoteType } from './main';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getNotes = () => {
    return this.http.get(`${API_KEY}/notes.json`);
  }

  postNotes = (note: NoteType) => {
    return this.http.post(`${API_KEY}/notes.json`, {
      txt: note.txt,
      date: note.date,
      color: note.color ?? ''
    })
  }

  deleteNote = (id: string) => {
    return this.http.delete(`${API_KEY}/notes/${id}.json`)
  }
}
