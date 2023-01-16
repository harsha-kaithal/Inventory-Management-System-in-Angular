import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  ProductForm = this.fb.group({
    id: ['',[Validators.required]],

    pName: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.minLength(2)]],

    pPrice: ['',[Validators.required]],
    pMfgDate: ['',[Validators.required]],
    pExpiryDate: ['',Validators.required],
    pAvailabiltyCount: ['',Validators.required]
})
isEdit:boolean=false;

bName:string;
constructor(private fb:FormBuilder,private service:InventoryServicesService,private DialogRef:DialogRef, @Inject(MAT_DIALOG_DATA) public editData:any){}

ngOnInit()
{
  this.service.s.subscribe(id => {
    this.service.GetProductById(id).subscribe(
      {
        next:(res)=>
        {
          this.isEdit=true;
          this.ProductForm.value.id=res.id
          this.ProductForm.value.pName=res.pName
          this.ProductForm.value.pPrice=res.pPrice
          this.ProductForm.value.pMfgDate=res.pMfgDate
          this.ProductForm.value.pExpiryDate=res.pExpiryDate
          this.ProductForm.value.pAvailabiltyCount=res.pAvailabiltyCount
        }
      }
    )
  });

  if(this.editData)
  {
    this.isEdit=true;
    this.ProductForm.controls['id'].setValue(this.editData.id)
    this.ProductForm.controls['pName'].setValue(this.editData.pName)
    this.ProductForm.controls['pPrice'].setValue(this.editData.pPrice)
    this.ProductForm.controls['pMfgDate'].setValue(this.editData.pMfgDate)
    this.ProductForm.controls['pExpiryDate'].setValue(this.editData.pExpiryDate)
    this.ProductForm.controls['pAvailabiltyCount'].setValue(this.editData.pAvailabiltyCount)
    console.log(this.editData);
  }
}
onSubmit(){
  if(!this.editData)
  {
  this.service.AddProduct(this.ProductForm.value)
    .subscribe(response => {
        console.log(response)
  })
  this.ProductForm.reset();
  this.DialogRef.close('save');
  window.location.reload();

}
else{
  this.service.UpdateProduct(this.ProductForm.value).subscribe();
    // this.ProductForm.reset();
    console.log(this.ProductForm.value.id);
    console.log(this.ProductForm.value)
  this.DialogRef.close('edit');
  window.location.reload();

}
}

// onEdit(){
//   this.service.UpdateProduct(this.ProductForm.value,this.id);
//     this.ProductForm.reset();
//   this.DialogRef.close('edit');
// }
reset(){
  this.ProductForm.reset();
}


}
