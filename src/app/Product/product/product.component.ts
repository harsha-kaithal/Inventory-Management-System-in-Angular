import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { product } from 'src/app/Models/Product';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  Product_LIST: product[];
  displayedColumns = ['pId','pName','pPrice','pMfgDate','pExpiryDate','pAvailabiltyCount','Edit','Delete'];
  ngOnInit():void
  {
   this.service.GetProduct().subscribe((data:product[]) => {
     this.Product_LIST = data;
     console.log(data);
   })
  }
  constructor(public dialog: MatDialog,private service:InventoryServicesService){}
 

  openDialog() 
  {
    const dialogRef = this.dialog.open(AddProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editProduct(element:any)
  {
    this.dialog.open(AddProductComponent,{
      data:element
    });

  }

  Delete(id:number)
  {
    this.service.DeleteProduct(id).subscribe();
    window.location.reload();
  }

}
