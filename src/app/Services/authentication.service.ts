import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, User } from '@angular/fire/auth';
import { from, Subject, switchMap, tap } from 'rxjs';
import { user } from '../Models/user';
import { InventoryServicesService } from './inventory-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  cUser = new Subject<user>
  currentUser$ = authState(this.auth)
  constructor(private auth: Auth,private service:InventoryServicesService) { }

  signup(name: any, email:any, password:any, phoneNumber:any, address:any)
  {
    let newUser = new user()
    newUser.name=name;
    newUser.email=email;
    newUser.phoneNumber = phoneNumber;
    newUser.address = address;
    this.service.AddSupplier(newUser).subscribe();
    console.log(newUser);
    return from(createUserWithEmailAndPassword(this.auth, email,password))
    .pipe(switchMap(({ user })=> updateProfile(user, {displayName: name})));
    
    // tap(res =>{
    //   this.authenticatedUser(res.email, res.localId, resid)
    // })
  }

  login(username: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  logout() {
    return from(this.auth.signOut());
  }

  // private authenticatedUser(email: string, userId: string, token: string, expiresIn: number)
  // {
  //   const expirationDate = new Date (new Date().getTime() + expiresIn*1000);
  //   const cuser = new user(email,userId,token,expirationDate)

  //   this.cUser.next(cuser);
  // }
 
}
