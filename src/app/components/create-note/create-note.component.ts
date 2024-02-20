import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MainService } from '../../pages/main/main.service';
import { NoteType } from '../../pages/main/main';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
  ],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss'
})
export class CreateNoteComponent implements OnInit {

  formNote!: FormGroup;

  currentDate!: any;

  constructor (
    private main_service: MainService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm = () => {
    this.formNote = new FormGroup({
      textArea: new FormControl(''),
      colorInput: new FormControl('')
    })
  }

  submitCreateNote = () => {
    const date: Date = new Date();
    const dateFormated = date.toLocaleDateString('pt-BR');
    
    const textAreaValue = this.formNote.controls['textArea'].value;
    const colorInput = this.formNote.controls['colorInput'].value;    

    const newNote: NoteType = {
      txt: textAreaValue,
      date: dateFormated,
      color: colorInput
    }

    this.main_service.postNotes(newNote).subscribe({
      next: (notesResponse) => {
        this.dialog.closeAll();
      }
    })
  }
}
