import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {



  SupplierForm!: FormGroup;


  
  constructor(private fb: FormBuilder, private service: InventoryServicesService, private DialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public editData: any,private authService:AuthenticationService) { }

  ngOnInit(): void {

    this.SupplierForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(32)]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', Validators.required]
    })
  }

  get name() {
    return this.SupplierForm.get('name');
  }

  get email() {
    return this.SupplierForm.get('email');
  }

  get password() {
    return this.SupplierForm.get('password');
  }

  get confirmPassword() {
    return this.SupplierForm.get('confirmPassword');
  }

  get address(){
    return this.SupplierForm.get('address');
  }

  get phoneNumber(){
    return this.SupplierForm.get('phoneNumber');
  }

  onSubmit() {


    // this.service.AddSupplier(this.SupplierForm.value)
    //   .subscribe(response => {
    //     console.log(response)
    //   })
    
    const {name, email, address, phoneNumber} = this.SupplierForm.value;
  const password = 123456;
    this.authService.signup(name,email,password,phoneNumber,address).subscribe();
    this.SupplierForm.reset();
    this.DialogRef.close('save');
    alert("Supplier added Successfully")
    window.location.reload();

  }
 
  reset() {
    this.SupplierForm.reset();
  }
}


