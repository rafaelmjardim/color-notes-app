import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionCreateOutline } from "@ng-icons/ionicons";
import { HeaderComponent } from '../../components/header/header.component';
import { NoteType } from './main';

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

  ngOnInit(): void {
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
  }
}
