import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CompareTwoString } from '../../Util/compare-two-string';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userRoles : any = [{
                      roleId : 1,
                      roleName : 'Admin'
                    },
                    {
                      roleId : 2,
                      roleName : 'Employee'
                    }
                  ];
    signupForm = this.fb.group({
      name: ['',
        [Validators.required]
      ],
      email: ['',
          [Validators.required, 
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['',
          [Validators.required, Validators.minLength(8)]
        ],
      rePassword:['',
        [Validators.required, Validators.minLength(8)]
        ],
      roleId:['',
        [Validators.required]
      ]
    },
    {
      validators: CompareTwoString("password","rePassword")
    });

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.signupForm.value);
  }

  get nameValidate(){
    return this.signupForm.get('name');
  }
  get emailValidate(){
    return this.signupForm.get('email');
  }
  get passwordValidate(){
    return this.signupForm.get('password');
  }
  get rePasswordValidate(){
    return this.signupForm.get('rePassword');
  }
  get roleValidate(){
    return this.signupForm.get('roleId');
  }

}
