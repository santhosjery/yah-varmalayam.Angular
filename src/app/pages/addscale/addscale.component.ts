import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addscale',
  templateUrl: './addscale.component.html',
  styleUrls: ['./addscale.component.css']
})
export class AddscaleComponent implements OnInit {

  existingScaleNumber : number = null;

  scaleForm  =this.fb.group({
    scaleName: ['',[Validators.required]],
    isActive : [false, [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.scaleForm.value);
  }

  get scaleNameValidate(){
    return this.scaleForm.get('scaleName');
  }

}
