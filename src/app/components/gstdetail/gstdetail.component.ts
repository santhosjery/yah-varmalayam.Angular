import { Component, OnInit, Input } from '@angular/core';
import { GstService } from '../../services/gstservice/gst.service';

@Component({
  selector: 'app-gstdetail',
  templateUrl: './gstdetail.component.html',
  styleUrls: ['./gstdetail.component.css']
})
export class GstdetailComponent implements OnInit {
  @Input() public selectedId:number;
  @Input() public form;
  public _gstList:any[];

  constructor(private gstService: GstService) { 
  } 

  ngOnInit(): void {
    this._gstList = this.gstService.getGstList();
    console.log(this._gstList);
  }

}
