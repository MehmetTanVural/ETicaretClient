import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_User } from '../../../concrats/users/create_user';
import { User } from '../../../../entities/user';
import { firstValueFrom, Observable } from 'rxjs';
import { Token } from '../../../concrats/token/token';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { TokenResponse } from '../../../concrats/token/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService:HttpClientService, private toastrService:CustomToastrService) { }

 async create(user:User): Promise<Create_User>{
 const observable: Observable<Create_User | User> = this.httpClientService.post<Create_User | User>({
    controller: "users"
  }, user);

 return await firstValueFrom(observable) as Create_User;
  }

  async login(userNameOrEmail:string, password:string, callBackFunction?: () => void): Promise<any>{
  const observable: Observable<any | TokenResponse> = this.httpClientService.post<any | TokenResponse>({
    controller:"users",
    action:"login"
  }, { userNameOrEmail, password })

  const tokenResponse: TokenResponse =  await firstValueFrom(observable) as TokenResponse;
  if (tokenResponse)
    localStorage.setItem("accessToken", tokenResponse.token.accessToken);
    this.toastrService.message("Kulllanıcı girişi başarıyla sağlanmıştır.", "Giriş başarılı",{
  messageType : ToastrMessageType.Success,
  position: ToastrPosition.TopRight
    })
  callBackFunction();
  }
}
