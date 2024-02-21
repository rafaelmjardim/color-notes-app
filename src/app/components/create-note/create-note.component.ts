import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MainService } from '../../pages/main/main.service';
import { NoteType } from '../../pages/main/main';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
  ],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss'
})
export class CreateNoteComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  formNote!: FormGroup;

  currentDate!: any;

  constructor (
    private main_service: MainService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.initForm();
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
    
    if (newNote.txt) {
      this.main_service.postNotes(newNote).subscribe({
        next: (notesResponse) => {
          this.subscription = this.main_service.getNoteFunctionStream$.subscribe(getNotesFunction => {
            if (getNotesFunction) {
              return getNotesFunction();
            }
          })
  
          this.dialog.closeAll();
        }
      })
    }
  }

  closeDialog = () => {
    this.dialog.closeAll();
  }
}
