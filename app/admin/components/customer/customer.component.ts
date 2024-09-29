import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
  }

}
