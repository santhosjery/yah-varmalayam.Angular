import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addgst',
  templateUrl: './addgst.component.html',
  styleUrls: ['./addgst.component.css']
})
export class AddgstComponent implements OnInit {
  existingGSTNumber : number = null;

  gstForm  =this.fb.group({
    gstName: ['',[Validators.required]],
    gstPercentage : ['',[Validators.required]],
    isActive : [false, [Validators.required]]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.gstForm.value);
  }

  get gstNameValidate(){
    return this.gstForm.get('gstName');
  }

  get gstPercentageValidate (){
    return this.gstForm.get('gstPercentage');
  }
  

}
