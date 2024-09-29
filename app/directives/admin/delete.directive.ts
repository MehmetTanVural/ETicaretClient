import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/model/product.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerType } from '../../base/base.component';
import { DialogService } from '../../services/common/dialog.service';

declare var $ : any;

@Directive({
  selector: '[appDelete]',
  standalone: true
})
export class DeleteDirective {

  constructor(
      private element: ElementRef,
      private _renderer: Renderer2,
      private httpClientService:HttpClientService,
      public dialog: MatDialog,
      private alertfyService:AlertifyService,
      private dialogService:DialogService
    ) 
      { 
        const img = _renderer.createElement("img");
        img.setAttribute("src", "../../../../../assets/delete.png");
        img.setAttribute("style", "cursor: pointer;");
        img.width = 30;
        img.height = 30;
        _renderer.appendChild(element.nativeElement, img);
      }
      
     @Input() id: string;
     @Input() controller: string;
     @Output() callback: EventEmitter<any> = new EventEmitter;

      @HostListener("click")
     async onClick(){
      this.dialogService.openDialog({
        componentType:DeleteDialogComponent,
        data: DeleteState.Yes,
        afterClosed: async() => {
          const td : HTMLTableCellElement = this.element.nativeElement;
          this.httpClientService.delete({
            controller: this.controller
          }, this.id).subscribe(data => {
            $(td.parentElement).animate({
              opacity: 0,
              left: "+=50",
              height: "toogle"
             }, 700, () => {
  
             })
             .fadeOut(2000, () => {
              this.callback.emit();
              this.alertfyService.message("Ürün başarıyla silinmiştir.",{
                dismissOthers : true,
                messageType: MessageType.Success,
                position: Position.TopRight
              })
            });
          }, (errorResponse: HttpErrorResponse) => {
            this.alertfyService.message("Ürün silinirken beklenmeyen bir hatayla karşılaşılmıştır.",{
              dismissOthers : true,
              messageType: MessageType.Error,
              position: Position.TopRight
            });
          });    
        }
      });
      }

      // openDialog(afterClosed: any): void {
      //   const dialogRef = this.dialog.open(DeleteDialogComponent, {
      //     data: DeleteState.Yes,
      //   });
    
      //   dialogRef.afterClosed().subscribe(result => {
      //    if (result == DeleteState.Yes) {
      //     afterClosed();
      //    }
      //   });
      // }
    
    
}

