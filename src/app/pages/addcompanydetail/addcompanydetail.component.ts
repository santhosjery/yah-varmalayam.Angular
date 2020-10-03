import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addcompanydetail',
  templateUrl: './addcompanydetail.component.html',
  styleUrls: ['./addcompanydetail.component.css']
})
export class AddcompanydetailComponent implements OnInit {
  existingDetailId : number = null;

  companyDetailsForm  =this.fb.group({
    profileName: ['',[Validators.required]],
    mobileNumber : ['',[Validators.required]],
    address : ['',[Validators.required]],
    GSTINnumber : [''],
    description1 : [''],
    description2 : [''],
    isActive : [false, [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.info(this.companyDetailsForm.value);
  } 

  get profileNameValidate(){
    return this.companyDetailsForm.get('profileName');
  }
 
  get mobileNumberValidate(){
    return this.companyDetailsForm.get('mobileNumber');
  }

  get addressValidate(){
    return this.companyDetailsForm.get('address');
  }

}
