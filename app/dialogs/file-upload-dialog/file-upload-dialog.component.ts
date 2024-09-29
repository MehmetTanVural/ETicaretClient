import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { BaseDialog } from '../base/base-dialog';
import { DialogModule } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-file-upload-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose ,MatDialogContent,MatButtonModule],
  templateUrl: './file-upload-dialog.component.html',
  styleUrl: './file-upload-dialog.component.css'
})
export class FileUploadDialogComponent extends BaseDialog<FileUploadDialogComponent> {

  constructor(dialogRef: MatDialogRef<FileUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FileUploadDialogState
    ){
    super(dialogRef)
  } 

}

export enum FileUploadDialogState {
  Yes, No
}
 