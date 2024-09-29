import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { OrdersComponent } from './admin/components/orders/orders.component';
import { CustomerComponent } from './admin/components/customer/customer.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { RegisterComponent } from './ui/components/register/register.component';

declare var $:any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutComponent,AdminComponent,ProductsComponent,OrdersComponent,CustomerComponent,DashboardComponent,RouterLink,NgxSpinnerComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ETicaretClient';

  constructor(){
   
  }

  ngOnInit(): void {
    
  }
} 


