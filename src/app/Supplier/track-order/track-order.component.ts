import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { CommonServiceService } from 'src/app/SharedService/common-service.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent {

  currentSupplier:any;
  constructor(private authService:AuthenticationService,private service:InventoryServicesService,private router:Router,private commonServices:CommonServiceService){}

  ngOnInit()
  {
    this.currentSupplier= this.commonServices.userData;
  }
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
    });
  }
}
