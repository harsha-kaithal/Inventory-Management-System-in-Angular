import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword) 
    {
      return {
        passwordsDontMatch:true
    }
  }
  return null;
};
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private fb:FormBuilder,private rs:InventoryServicesService ,private _Router:Router, private authService:AuthenticationService, private router:Router) { }

  signUpForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(2)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
  },{ validators: passwordMatchValidator() }) //cross field validator

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get address(){
    return this.signUpForm.get('address');
  }

  get phoneNumber(){
    return this.signUpForm.get('phoneNumber');
  }

  submit()
  {
    if(!this.signUpForm.valid) return;
    
    const {name, email, password, address, phoneNumber} = this.signUpForm.value;

    this.authService.signup(name,email,password,phoneNumber,address).subscribe(()=>
    this.router.navigate(['/signIn']));
    
  }

}