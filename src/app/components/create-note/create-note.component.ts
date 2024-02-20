import { Component } from '@angular/core';
import {MatInput, MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [
    MatInputModule
  ],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss'
})
export class CreateNoteComponent {

}
