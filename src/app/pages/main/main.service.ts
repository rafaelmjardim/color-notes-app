import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { NoteType } from './main';
import { BehaviorSubject, Observable, isObservable } from 'rxjs';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class MainService {

  getNoteFunctionSubject = new BehaviorSubject<Function>(()=> null);
  getNoteFunctionStream$ = this.getNoteFunctionSubject.asObservable();

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

  //função que faz o next para armazenar a função do get de notas
  setOnGetNoteListFunctionSubject = (getFunction: Function) => {
    this.getNoteFunctionSubject.next(getFunction);
  }
}
