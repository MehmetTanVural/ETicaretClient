import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Observable } from 'rxjs';
import { Create_Product } from '../../../concrats/create_product';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { DeleteDirective } from '../../../directives/admin/delete.directive';
import {MatDialogClose, MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../../dialogs/delete-dialog/delete-dialog.component';
import { FileUploadComponent } from '../../../services/common/file-upload/file-upload.component';
import { BaseDialog } from '../../../dialogs/base/base-dialog';
import { FileUploadDialogComponent } from '../../../dialogs/file-upload-dialog/file-upload-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';

//DeleteDialogComponent,FileUploadComponent,BaseDialog,FileUploadDialogComponent

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatSidenavModule,CreateComponent,ListComponent,MatInputModule,MatFormFieldModule,MatButtonModule,DeleteDirective,MatDialogModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent extends BaseComponent implements OnInit {
 
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService){
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.ballSpinClockwiseFadeRotating);
  }

  @ViewChild(ListComponent) listComponents: ListComponent; //parent productscomp child listcomp

  createdProduct(createdProduct:Create_Product){
    this.listComponents.getProducts();
  }

}
