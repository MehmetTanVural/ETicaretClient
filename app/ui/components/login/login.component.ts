import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/common/model/user.service';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends BaseComponent implements OnInit{

  constructor(private userService: UserService, spinner:NgxSpinnerService){
    super(spinner)
  }

  ngOnInit(): void {
    
  }

 async login(userNameOrEmail:string, password:string){
  this.showSpinner(SpinnerType.BallAtom);
   await this.userService.login(userNameOrEmail, password, () => this.hideSpinner(SpinnerType.BallAtom));
  }

}
