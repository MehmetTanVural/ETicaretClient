import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
