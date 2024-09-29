import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatListModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
