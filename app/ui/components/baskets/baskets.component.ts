import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-baskets',
  standalone: true,
  imports: [RouterLink,RouterOutlet,],
  templateUrl: './baskets.component.html',
  styleUrl: './baskets.component.css'
})
export class BasketsComponent extends BaseComponent implements OnInit {
 
  constructor(spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
  }

}

