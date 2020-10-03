import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password:new FormControl('', [Validators.required,
      Validators.minLength(8)])
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.signinForm.value);
  }

  get emailValidate(){
    return this.signinForm.get('email');
  }

  get passwordValidate(){
    
    console.log(this.signinForm.get('password'))
    return this.signinForm.get('password');
  }

}
