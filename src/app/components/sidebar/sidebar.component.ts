import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionAddOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIcon
  ],
  providers: [provideIcons({ionAddOutline})],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


  handleCreateNote = () => {
    alert('Criar nota')
  }
}
