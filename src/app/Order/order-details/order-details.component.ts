import { Component, ViewChild } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

import { Order } from 'src/app/Models/orders';

import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';

import { NotificationService } from 'src/app/SharedService/notification.service';

import { SupplierForm } from 'src/app/Models/Supplier';

import { product } from 'src/app/Models/Product';

@Component({

  selector: 'app-order-details',

  templateUrl: './order-details.component.html',

  styleUrls: ['./order-details.component.css']

})

export class OrderDetailsComponent {

 

  constructor(private notifySer:NotificationService,private fb:FormBuilder,private inventorySer:InventoryServicesService ,private _Router:Router) { }

  orderDetailsform!:FormGroup;

  orders:Order[];

  suppliers: SupplierForm[];

  productData : product[];

  pPrice:string;

  totalAmount:number;

  dataSource = new MatTableDataSource<Order>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  orderIdpattern!:"^[0-9]$"

  displayedColumns = ['pId','productName','supplier','oNoOfProducts','oAmount','oDate','oPayment','oPaymentType','oStatus','action'];

  ngOnInit(): void {

    this.orders=[];

    this.totalAmount=0;

    this.inventorySer.GetProduct().subscribe((data:product[]) => {

      this.productData = data;

      console.log(data);

    });



    this.inventorySer.GetSupplier().subscribe((data:SupplierForm[]) => {

      this.suppliers = data;

      console.log(data);

    })

    this.dataSource.paginator = this.paginator;

    this.orderDetailsform=this.fb.group({

      id: new FormControl(''),

      pId: new FormControl(''),

      productName:new FormControl('', [Validators.required]),

      oNoOfProducts: new FormControl('', [Validators.required]),

      oAmount:new FormControl('',[Validators.required]),

      oPaymentType:new FormControl('',[Validators.required]),

      oPayment:new FormControl('',[Validators.required]),

      oDate:new FormControl('',[Validators.required]),

      oStatus:new FormControl(''),

      reportIssue:new FormControl(''),

      supplier:new FormControl('',[Validators.required])

      });

  }

    public errorFunc = (controlName: string, errorName: string) =>{

    return this.orderDetailsform.controls[controlName].hasError(errorName);

    }

    removeOrder(id:string){
      if (this.orders.find(x => x.pId == id)) {
        this.totalAmount-=parseInt(this.orders.filter(x=>x.pId==id).find(x => x.oAmount)?.oAmount as string);
      this.orders.splice(this.orders.findIndex(x => x.pId == id), 1);
       this.refresh();
      }
    }

    resetFormGroup(){

      this.orderDetailsform.reset();

    }

    refresh() {

      this.dataSource.data=this.orders;

    }

    orderFunc(){

    if(this.orderDetailsform.valid)

    {  

      //console.log(this.orderDetailsform.value);

      this.orderDetailsform.controls['oStatus'].setValue('Pending');

      this.orders.push(this.orderDetailsform.value);

      this.totalAmount+=parseInt(this.orderDetailsform.controls['oAmount'].value)

     // console.log(this.dataSource.data);

      this.resetFormGroup();

      this.refresh();

     

    }

    else

    {

      this.notifySer.showError('Datails not valid','');

    }

  }

  productOnChanged(value:string){

   this.orderDetailsform.controls['oAmount'].setValue(this.productData.filter(x=>x.pName==value).find(x=>x.pPrice)?.pPrice);

   this.pPrice=this.orderDetailsform.controls['oAmount'].value;

   this.orderDetailsform.controls['pId'].setValue(this.productData.filter(x=>x.pName==value).find(x=>x.id)?.id);

  }

  getTotalOrderAmount(event:any){
    this.orderDetailsform.controls['oAmount'].setValue(parseInt(this.pPrice) * parseInt(event.target.value));
  }

  saveOrderDetails(){

    if(this.orders.length>0){

      for(let order of this.orders)

      {

        this.inventorySer.saveOrdersDetails(order).subscribe();

      }

        this.notifySer.showSuccess('Order details save successfully','')

        setTimeout(()=>{

          window.location.reload()

        },4000)

    }

  }

}



