import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionCreateOutline } from "@ng-icons/ionicons";
import { HeaderComponent } from '../../components/header/header.component';
import { NoteREQ, NoteType } from './main';
import { MainService } from './main.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    NgIcon, 
  ],
  providers: [provideIcons({ionCreateOutline })],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  noteList: NoteREQ[] = [];

  constructor (private main_service: MainService){}

  ngOnInit(): void {
    this.onGetNotesList();
  }
  
  onGetNotesList = () => {
    this.main_service.getNotes().subscribe(notesResponse => {      
      //Recebe os dados do firebase api
      const notesObject: any = notesResponse;   
      
      //converte os objetos em array de objetos
      this.noteList = Object.keys(notesObject).map(key => {    
        return {id: key, value: notesObject[key]};
      })      
    });
  }

  handlePostTeste = () => {
    this.main_service.postNotes().subscribe(res => {
      console.log('postou', res);
      this.onGetNotesList();
    });
  }
}
