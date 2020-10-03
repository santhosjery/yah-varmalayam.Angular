import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GstService {
  private gstList: any[];
  constructor() { 
    this.gstList = [{
      'GstId':1,
      'GstName':'CGST'
    },
    {
      'GstId':2,
      'GstName':'IGST'
    }];
  }

  public getGstList():any[] {
    return this.gstList;
  }
}
