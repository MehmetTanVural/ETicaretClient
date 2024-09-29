import { Component, Inject, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { BaseDialog } from '../base/base-dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MatDialogContent,MatDialogActions,MatDialogClose, MatButtonModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent  extends BaseDialog<DeleteDialogComponent>{

  constructor(
    dialogRef :MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteState)
  {
    super(dialogRef);
  }

  
  
}


export enum DeleteState {
  Yes,
  No
}