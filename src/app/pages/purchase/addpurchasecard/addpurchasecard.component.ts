import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { GstService } from '../../../services/gstservice/gst.service';
import { PackagetypeService } from '../../../services/packagetype/packagetype.service';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-addpurchasecard',
  templateUrl: './addpurchasecard.component.html',
  styleUrls: ['./addpurchasecard.component.css']
})
export class AddpurchasecardComponent implements OnInit {
  existingPurchaseCardId : number = null;

  productDetail : any[];
  existingProductId: null;
  gstDetail : any[];
  existingGstId: null;
  packageTypeDetail : any[];
  existingPackageId: null;


  public selectedGstId : number = null;
  purchaseCardForm  = this.fb.group({
    productId : ['',[Validators.required]],
    clientName : [''],
    clientMobileNumber : [''],
    packageTypeId : ['',[Validators.required]],
    numberOfItems : ['',[Validators.required]],
    amountPerItem : ['',[Validators.required]],
    gstId: ['',[Validators.required]],
    purchasedAmount : ['',[Validators.required]],
    sellingAmount : ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder, 
              private gstDettail: GstService,
              private packagetypeService: PackagetypeService,
              private productService: ProductService) {
    this.gstDetail = gstDettail.getGstList();
    this.packageTypeDetail = packagetypeService.getPackageList();
    this.productDetail = productService.getProductList();
  }

  ngOnInit(): void {
  }

  get productIdValidate(){
    return this.purchaseCardForm.get('productId');
  }

  get gstIdValidate(){
    return this.purchaseCardForm.get('gstId');
  }

  get sellingAmountValidate(){
    return this.purchaseCardForm.get('sellingAmount');
  }

  get packageTypeIdValidate(){
    return this.purchaseCardForm.get('packageTypeId');
  }

  get numberOfItemsValidate(){
    return this.purchaseCardForm.get('numberOfItems');
  }

  get amountPerItemValidate(){
    return this.purchaseCardForm.get('amountPerItem');
  }

  onSubmit(){
    console.info(this.purchaseCardForm.value);
  } 

}
