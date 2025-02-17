import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../../entities/user';
import { Create_User } from '../../../concrats/users/create_user';
import { UserService } from '../../../services/common/model/user.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private userService: UserService, private toastrService:CustomToastrService){}

  frm:FormGroup;

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      nameSurname: ["", 
        [Validators.required,
         Validators.maxLength(50),
         Validators.minLength(3)]],
      username: ["",
      [Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)]],
      email: ["",
        [Validators.required,
          Validators.maxLength(250),
          Validators.email]],
      password: ["",
        [Validators.required
      ]],
      passwordConfirm: ["",
        [Validators.required
      ]]
    })
  }

  get component() {
    return this.frm.controls;
  }

  submitted: boolean = false;
  async onSubmit(user: User)
  {
    this.submitted = true;
   if (this.frm.invalid) {
    return;
   }

  const result: Create_User = await this.userService.create(user);
  if (result.succeeded) 
    this.toastrService.message(result.message,"Kullanıcı Kaydı Başarılı", {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopRight
    })
  else
    this.toastrService.message(result.message,"Hata", {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopRight
    })
  }
 }

