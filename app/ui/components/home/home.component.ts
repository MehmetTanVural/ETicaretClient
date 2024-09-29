import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends BaseComponent implements OnInit {
 
  constructor(spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple);
  }

}
