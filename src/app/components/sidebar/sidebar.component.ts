import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionAddOutline } from '@ng-icons/ionicons';
import { MainService } from '../../pages/main/main.service';

import { MatDialog } from "@angular/material/dialog";
import { CreateNoteComponent } from '../create-note/create-note.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIcon,
  ],
  providers: [provideIcons({ionAddOutline})],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor (
    private main_service: MainService,
    private dialog: MatDialog 
  ){}

  handleOpenCreateNoteDialog = () => {
    this.dialog.open(CreateNoteComponent, {
      width: '35rem',
      height: '40rem'
    })
  }
}
