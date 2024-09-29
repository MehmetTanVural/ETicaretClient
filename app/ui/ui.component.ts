import { Component } from '@angular/core';
import { BasketsComponent } from './components/baskets/baskets.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [BasketsComponent,HomeComponent,ProductsComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css'
})
export class UiComponent {

}
