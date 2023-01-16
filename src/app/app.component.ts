import { Component } from '@angular/core';
import { Auth, authState, getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from './Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventorymanagement';
  id:any;
  user = '';
  constructor(public authService:AuthenticationService,private router:Router,private auth:Auth){}

  ngOnInit()
  {
    // const auth = getAuth();
    // this.user = auth.currentUser?.email as string;
    // console.log(this.user);
    // console.log('this is ')
  }
  
  
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
    });
  }
 arr:[];
}
