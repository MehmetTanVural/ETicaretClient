import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AlertifyOptions, AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { delay } from 'rxjs';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,FooterComponent,RouterOutlet,MatSidenavModule,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  constructor(private alertify: AlertifyService){}

  ngOnInit(): void {
  //  this.alertify.message("Merhaba", {
  //   messageType : MessageType.Error,
  //   delay : 5,
  //   position : Position.TopRight
  //  });
  
  }

}
