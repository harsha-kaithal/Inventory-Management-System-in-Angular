import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { AddSupplierComponent } from '../add-supplier/add-supplier.component';
import { SupplierForm } from 'src/app/Models/Supplier';

import { EditSupplierComponent } from '../edit-supplier/edit-supplier.component';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})

export class SupplierComponent implements OnInit {

  Supplier_LIST: SupplierForm[];
  displayedColumns = [ 'sId', 'sName' ,'sPhoneNumber', 'sAddress','Edit','Delete'];

  constructor(public dialog: MatDialog,private service:InventoryServicesService){}

  ngOnInit(): void {
    this.service.GetSupplier().subscribe((data:SupplierForm[]) => {
      this.Supplier_LIST = data;
      console.log(data);
    })
  }
  
  openDialog() 
  {
    const dialogBox = this.dialog.open(AddSupplierComponent);
    dialogBox.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // openDialog2(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //     const dialogBox=this.dialog.open(AddSupplierComponent, {
  //       enterAnimationDuration,
  //       exitAnimationDuration,
  //     });
  //     dialogBox.afterClosed().subscribe(result => {
  //           console.log(`Dialog result: ${result}`);
  //         });
  //   }
  
  EditSupplier(details:any)
  {
    this.dialog.open(EditSupplierComponent,{
      data: details
    });
  }

  DeleteSupplier(id:number)
  {
    this.service.DeleteSupplier(id).subscribe()
    alert("Supplier Deleted Successfully!");
    window.location.reload();

  }
}