import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Order } from 'src/app/Models/orders';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { CommonServiceService } from 'src/app/SharedService/common-service.service';

interface IOrderStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-returned',
  templateUrl: './returned.component.html',
  styleUrls: ['./returned.component.css']
})
export class ReturnedComponent implements OnInit {

  constructor(public dialog: MatDialog,private commonServices:CommonServiceService,private authService:AuthenticationService,private service:InventoryServicesService,private router:Router){}

  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
    });
  }

  Order_LIST: Order[];
  currentSupplier:any;
  displayedColumns = ['oId','oNoProduct','oAmount','oDate','oPayment','oPaymentType','oStatus'];
  orderStatus: IOrderStatus[] = [
    {value: '1', viewValue: 'Delivered'},
    {value: '2', viewValue: 'Pending'},
    {value: '3', viewValue: 'Canceled'},
    {value: '4', viewValue: 'Returned'},
  ];

  ngOnInit():void
  {
  //  this.service.orderGetData().subscribe((data:Order[]) => {
  //    this.Order_LIST = data.filter( order => order.oStatus=='Returned');
  //    {
  //    console.log(data);
  //    }
  //  })

   this.currentSupplier= this.commonServices.userData;
   this.service.orderGetData().subscribe((data: Order[]) => {
     this.Order_LIST = data.filter((order) => order.oStatus == 'Returned' && order.supplier == this.currentSupplier.name);
   });
  }

}