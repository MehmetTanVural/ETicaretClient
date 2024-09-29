import { Component, Inject, Output } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { FileUploadComponent, FileUploadOptions } from '../../services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-select-product-image-dialog',
  standalone: true,
  imports: [MatDialogContent,MatDialogActions,FileUploadComponent],
  templateUrl: './select-product-image-dialog.component.html',
  styleUrl: './select-product-image-dialog.component.css'
})
export class SelectProductImageDialogComponent extends BaseDialog<SelectProductImageDialogComponent> {


  constructor(dialogRef: MatDialogRef<SelectProductImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectProductImageState | string)
  {
    super(dialogRef)
  }

  @Output() options: Partial<FileUploadOptions> = {
    accept: ".png, .jpg, .jpeg, .gif",
    action: "upload",
    controller : "product",
    explanation: "Ürün resmini seçin veya buraya sürükleyin...",
    isAdminPage: true,
    queryString: `id=${this.data}`

  }


}

export enum SelectProductImageState{
  Close
}