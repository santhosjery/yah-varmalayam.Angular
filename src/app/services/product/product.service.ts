import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: any[];
  constructor() {
      this.productList = [{
        'productId': 1,
        'productName': 'test'
      },
      {
        'productId': 1,
        'productName': 'test2'
      }
    ];
  }

  public getProductList():any[]{
    return this.productList;
  }
}
