import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
   constructor(private spinner: NgxSpinnerService){}

   showSpinner(spinnerNameType: SpinnerType){
    this.spinner.show(spinnerNameType)
    setTimeout(() =>this.hideSpinner(spinnerNameType), 3000);
   }

   hideSpinner(spinnerNameType: SpinnerType){
    this.spinner.hide(spinnerNameType)
   }
}

export enum SpinnerType{
  BallAtom = "s1",
  BallScaleMultiple = "s2",
  ballSpinClockwiseFadeRotating = "s3"

}
