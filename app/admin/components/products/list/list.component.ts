import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { List_Products } from '../../../../concrats/list_products';
import { ProductService } from '../../../../services/common/model/product.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDirective } from '../../../../directives/admin/delete.directive';
import { DialogService } from '../../../../services/common/dialog.service';
import { SelectProductImageDialogComponent } from '../../../../dialogs/select-product-image-dialog/select-product-image-dialog.component';

declare var $ : any


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, DeleteDirective],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent extends BaseComponent implements OnInit {
  
  constructor(private productService: ProductService, spinner: NgxSpinnerService, private alertifyService:AlertifyService, private dialogService:DialogService){
    super(spinner)
  }


  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updateDate', 'photos', 'edit', 'delete'];
  dataSource : MatTableDataSource<List_Products> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts(){
    this.showSpinner(SpinnerType.BallAtom);
    const allProducts:{totalCount: number; products: List_Products[] } =  await this.productService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5, ()=> this.hideSpinner(SpinnerType.BallAtom), errorMessage => this.alertifyService.message(errorMessage, {
       dismissOthers: true,
       messageType: MessageType.Error,
       position: Position.TopRight
     }));
     this.dataSource = new MatTableDataSource<List_Products>(allProducts.products);
     this.paginator.length = allProducts.totalCount;
     
  }


  addProductImages(id:string){
   this.dialogService.openDialog({
    componentType:SelectProductImageDialogComponent,
    data:id,
    options: {
      width: "1400px"
    }
   })
  }

 async pageChanged(){
    await this.getProducts();
  }

  async ngOnInit() {
   await this.getProducts();
  }
}

