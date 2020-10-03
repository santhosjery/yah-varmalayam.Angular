import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { GstService } from '../../services/gstservice/gst.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  existingProductId : null;
  gstDetail: any[];
  
  productForm  =this.fb.group({
    productName : ['',[Validators.required]],
    gstId : ['',[Validators.required]],
    isActive: [true,[Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private gstDettail: GstService
    ) {
      this.gstDetail = gstDettail.getGstList();
    }

  ngOnInit(): void {
  }

  get getProductNameValidate(){
    return this.productForm.get('productName');
  }

  get getGSTValidate(){
    return this.productForm.get('gstId');
  }

  onSubmit(){
    console.info(this.productForm.value);
  } 

}
