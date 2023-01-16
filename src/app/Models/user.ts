import { NonNullableFormBuilder } from "@angular/forms";

export class user{
 constructor(){}

  public email: string;
  public id: number;
  public name:string;
  public phoneNumber:number;
  public address:string;
  // get token()
  // {
  //   if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
  //   {
  //     return null;
  //   }
  //   return this._token;
  // }
}