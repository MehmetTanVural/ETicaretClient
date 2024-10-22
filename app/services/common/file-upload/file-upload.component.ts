import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent, FileUploadDialogState } from '../../../dialogs/file-upload-dialog/file-upload-dialog.component';
import { DeleteState } from '../../../dialogs/delete-dialog/delete-dialog.component';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [NgxFileDropModule, NgIf, NgFor,DialogModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
constructor(private httpClientService:HttpClientService,
  private alertifyService:AlertifyService,
  private customToastrService:CustomToastrService,
  private dialog: MatDialog,
  private dialogService:DialogService
){}

  public files: NgxFileDropEntry[];

 @Input() options: Partial<FileUploadOptions>;

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();
    for (const file of files){
      (file.fileEntry as FileSystemFileEntry).file((_file:File) => {
        fileData.append(_file.name, _file, file.relativePath);
      });
    }

    this.dialogService.openDialog({
      componentType:FileUploadDialogComponent,
      data:FileUploadDialogState.Yes,
      afterClosed: ()=>{
        this.httpClientService.post({
          controller: this.options.controller,
          action: this.options.action,
          queryString: this.options.queryString,
          headers: new HttpHeaders({ "responseType": "blob"})
        }, fileData).subscribe(data => {
         
         const message: string = "Dosyalar başarıyla yüklenmiştir.";
   
         if (this.options.isAdminPage) {
           this.alertifyService.message(message,
             {
               dismissOthers: true,
               messageType: MessageType.Success,
               position: Position.TopRight
             })
         }
         else{
             this.customToastrService.message(message, "Başarılı",
               {
                messageType: ToastrMessageType.Success,
                position: ToastrPosition.TopRight
               })
         }
   
        }, (errorResponse: HttpErrorResponse) => {
   
         const message: string = "Dosyalar yüklenirken beklenmeyen bir hatayla karşılaşılmıştır.";
   
         if (this.options.isAdminPage) {
           this.alertifyService.message(message,
             {
               dismissOthers: true,
               messageType: MessageType.Error,
               position: Position.TopRight
             })
         }
         else{
             this.customToastrService.message(message, "Başarısız",
               {
                messageType: ToastrMessageType.Error,
                position: ToastrPosition.TopRight
               })
         }
        })
  
      }
    })

   
  }


  // openDialog(afterClosed: any): void {
  //   const dialogRef = this.dialog.open(FileUploadDialogComponent, {
  //     data: FileUploadDialogState.Yes,
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //    if (result == FileUploadDialogState.Yes) {
  //     afterClosed();
  //    }
  //   });
  // }

}

export class FileUploadOptions {
  controller? : string;
  action? : string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}