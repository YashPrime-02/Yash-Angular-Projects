import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true, //must required for imports

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;
activeForm: 'login' | 'register'='login'; //to check which form is active rn by default its login one
//rest toggle is achieved at html part
constructor(private fb: FormBuilder){}


ngOnInit()
{

this.loginForm=this.fb.group({
 email: ['', [Validators.required, Validators.email]],
 password: ['', Validators.required]
});

this.registerForm=this.fb.group({
  username: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required]
 });





}
}
