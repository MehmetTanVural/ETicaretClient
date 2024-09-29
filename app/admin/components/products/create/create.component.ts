import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../../../services/common/model/product.service';
import { Create_Product } from '../../../../concrats/create_product';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { FileUploadComponent, FileUploadOptions } from '../../../../services/common/file-upload/file-upload.component';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatSidenavModule,MatFormFieldModule, MatInputModule, MatButtonModule,  MatDialogModule, MatIconModule,FileUploadComponent ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService, private productService:ProductService, private alertify:AlertifyService) {
    super(spinner)
  }

  ngOnInit(): void {
    
  }

  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();
 
  
  create(name:HTMLInputElement, stock:HTMLInputElement, price:HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom);
     const create_product: Create_Product = new Create_Product();
     create_product.name = name.value;
     create_product.stock = parseInt(stock.value);
     create_product.price = parseFloat(price.value);

    
     this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.message("Ürün basariyla eklenmiştir", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
     });
     this.createdProduct.emit(create_product);
  }, errorMesage => {
    this.alertify.message(errorMesage,
      {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      }
    )
  });
 
 }
}
