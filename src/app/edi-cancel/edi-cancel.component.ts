import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-edi-cancel',
  templateUrl: './edi-cancel.component.html',
  styleUrls: ['./edi-cancel.component.scss']
})
export class EdiCancelComponent implements OnInit {
  selectedValue: string = 'val1';
  selectedMawb :string = '';
  selectedFlight:string = '';
  mawbList:SelectItem[] = [];
  flightsList:SelectItem[]=[];
  mawbCycleDate = '';
  flightbCycleDate= '';
  tableData = [];
  constructor() { }

  ngOnInit() {
    this.mawbList = [{label : '764567' ,value : '764567'},{label : '54545' ,value : '54545'},{label : '496654' ,value : '496654'}];
    this.flightsList = [{label: 'FDX654' , value :'FDX654' },{label: 'FDX899' ,value :'FDX899'} ,{label: 'FDX599' ,value :'FDX599'}]
    this.tableData = [{cycle:'6' , flight: 'FX123' , mawb:'5645368987' ,bondIn : true , bondOut:true ,awb:7665465 , status: 'ready' },
    {cycle:'6' , flight: 'FX156' , mawb:'5989368987' ,bondIn : true , bondOut:false ,awb:7665465 , status: 'ready' },
    {cycle:'6' , flight: 'FX432' , mawb:'9886665554' ,bondIn : true , bondOut:false ,awb:7665465 , status: 'ready' }]
  }

}
