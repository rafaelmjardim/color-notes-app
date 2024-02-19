import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionCreateOutline } from "@ng-icons/ionicons";
import { HeaderComponent } from '../../components/header/header.component';
import { NoteType } from './main';
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

  noteList: NoteType[] = [];

  fbNoteList: any = [];

  constructor (private main_service: MainService){}

  ngOnInit(): void {
    this.setNoteList();
    this.onGetNotesList();

    
  }
  
  onGetNotesList = () => {
    this.main_service.getNotes().subscribe(notes => {      
      this.fbNoteList = notes;   
    });

  const array = Object.keys(this.fbNoteList).map(key => {    
    return this.fbNoteList[key];
  })
  console.log('array', array);
   
  }

  handlePostTeste = () => {
    this.main_service.postNotes().subscribe(res => {
      console.log('postou', res);
      
    });
  }

  setNoteList = () => {
    this.noteList = [
      {
        txt: 'Teste de nota por objeto',
        date: '18 de FocusEvent, 2024'
      },
      {
        txt: 'Teste de nota por objeto',
        date: '18 de FocusEvent, 2024'
      },
      {
        txt: 'Teste de nota por objeto',
        date: '18 de FocusEvent, 2024'
      },
      {
        txt: 'Teste de nota por objeto',
        date: '18 de FocusEvent, 2024'
      },
    ]

    console.log(this.noteList);

  }
}
