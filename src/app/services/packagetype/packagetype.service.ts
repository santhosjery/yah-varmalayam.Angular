import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackagetypeService {
  private packageList: any[];
  constructor() { 
    this.packageList = [{
      'packageId' : 1,
      'packageName': 'Single Item'
    },
    {
      'packageId' : 2,
      'packageName': 'Multiple Item'
    },
    {
      'packageId' : 3,
      'packageName': 'Packet'
    }];
  }

  public getPackageList():any[]{
    return this.packageList;
  }
}
