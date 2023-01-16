import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})

export class EditSupplierComponent {

  isEdit: boolean = false;
  id: number;

  SupplierForm = this.fb.group({
    id: [{value: '', disabled: true}, Validators.required],
    name: [{value: '', disabled: true}, [Validators.required,Validators.maxLength(32)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    address: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private service: InventoryServicesService, private DialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.service.supplierId.subscribe(id => {
      this.service.GetSupplierById(id).subscribe({
        next: (res) => {
          this.isEdit = true;
          this.id = res.id;
          this.SupplierForm.value.id = res.id;
          this.SupplierForm.value.name = res.name;
          this.SupplierForm.value.phoneNumber = res.phoneNumber;
          this.SupplierForm.value.address = res.address;
        }
      })
    });


    if (this.editData) {
      this.isEdit = true;
      this.id = this.editData.id;
      this.SupplierForm.controls['id'].setValue(this.editData.id)
      this.SupplierForm.controls['name'].setValue(this.editData.name)
      this.SupplierForm.controls['phoneNumber'].setValue(this.editData.phoneNumber)
      this.SupplierForm.controls['address'].setValue(this.editData.address)

    }
  }

  onSubmit() {

    if (!this.editData)
     {
      this.service.AddSupplier(this.SupplierForm.value)
        .subscribe(response => {
          console.log(response)
        })

      this.SupplierForm.reset();
      this.DialogRef.close('save');
      alert("Supplier added Successfully")
      window.location.reload();

    }

    else {
      this.service.EditSupplier(this.SupplierForm.value).subscribe();
      console.log(this.SupplierForm.value)
      this.DialogRef.close('edit');
      alert("Supplier Edited Successfully")
      window.location.reload();

    }
  }

  reset() {
    this.SupplierForm.reset();
  }
}


