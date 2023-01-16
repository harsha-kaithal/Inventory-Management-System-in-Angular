import { Component } from '@angular/core';
import { Order } from 'src/app/Models/orders';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private inventorySer:InventoryServicesService){}

  deliveredOrderCount:number;
  
  totalOrderCount:number;
  
  productCount:number;
  
  supplierCount:number;
  
  userCount:number;
  
  ngOnInit():void
  
    {
  
     this.inventorySer.orderGetData().subscribe((data:Order[]) => {
  
       this.deliveredOrderCount = data.filter(x=>x.oStatus=='Delivered').length;
  
       console.log(this.deliveredOrderCount);
  
     })
  
     this.inventorySer.orderGetData().subscribe((data:Order[]) => {
  
      this.totalOrderCount = data.length;
  
     console.log(this.totalOrderCount);
  
     })
  
     this.inventorySer.GetProduct().subscribe((data:any) => {
  
      this.productCount=data.length;
  
      console.log(this.productCount)
  
     })
  
     this.inventorySer.GetSupplier().subscribe((data:any) => {
  
      this.supplierCount=data.length;
  
      console.log(this.supplierCount)
  
     })
  
    //  this.inventorySer.userGetData().subscribe((data:any) => {
  
    //   this.userCount=data.length;
  
    //   //console.log(this.userCount)
  
    //  })
  
    }
  
  
  
}
