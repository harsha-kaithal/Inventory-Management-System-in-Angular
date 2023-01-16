import { Component,Inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { NotificationService } from 'src/app/SharedService/notification.service';

@Component({
  selector: 'app-report-quality',
  templateUrl: './report-quality.component.html',
  styleUrls: ['./report-quality.component.css']
})
export class ReportQualityComponent {
  constructor(private notifySer:NotificationService,private DialogRef:DialogRef, @Inject(MAT_DIALOG_DATA) public editData:any,private fb:FormBuilder,private inventorySer:InventoryServicesService){}
  orderDetailsform!:FormGroup;

  ngOnInit(): void {
    this.orderDetailsform=this.fb.group({
      id:new FormControl(),
      pId:new FormControl(),
      productName:new FormControl(),
      oNoOfProducts:new FormControl(),
      oAmount:new FormControl(),
      oPaymentType:new FormControl(),
      oPayment:new FormControl(),
      oDate:new FormControl(),
      oStatus:new FormControl(),
      supplier: new FormControl(),
      reportIssue:new FormControl()
      });
      this.orderDetailsform.controls['id'].setValue(this.editData.id);
      this.orderDetailsform.controls['pId'].setValue(this.editData.pId);
      this.orderDetailsform.controls['productName'].setValue(this.editData.productName);
      this.orderDetailsform.controls['oNoOfProducts'].setValue(this.editData.oNoOfProducts);
      this.orderDetailsform.controls['oAmount'].setValue(this.editData.oAmount);
      this.orderDetailsform.controls['oPaymentType'].setValue(this.editData.oPaymentType);
      this.orderDetailsform.controls['oPayment'].setValue(this.editData.oPayment);
      this.orderDetailsform.controls['oDate'].setValue(this.editData.oDate);
      this.orderDetailsform.controls['oStatus'].setValue(this.editData.oStatus);
      this.orderDetailsform.controls['reportIssue'].setValue(this.editData.reportIssue);
      this.orderDetailsform.controls['supplier'].setValue(this.editData.supplier);
      //console.log(this.editData.id);
  }
  raiseIssueReport(){
    this.inventorySer.updateOrderDetails(this.orderDetailsform.controls['id'].value,this.orderDetailsform.value).subscribe({
      next:(res)=>{
        this.notifySer.showSuccess('Issue raised successfully','');
        this.DialogRef.close('save');
        this.orderDetailsform.reset();
        setTimeout(()=>{
          window.location.reload();
        },4000)
        },
        error:(error)=>{
          this.notifySer.showError(error,'');
        }
    });
  }
}