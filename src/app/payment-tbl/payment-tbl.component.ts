import { Component, OnInit } from '@angular/core';
import { Paymentclass } from '../shared/paymentclass';
import { PaymentdataService } from '../shared/paymentdata.service';

@Component({
  selector: 'app-payment-tbl',
  templateUrl: './payment-tbl.component.html',
  styleUrls: ['./payment-tbl.component.css']
})
export class PaymentTblComponent implements OnInit {


payarr:Paymentclass[]=[];

  constructor(private _paydata:PaymentdataService)
   {

  }

  ngOnInit() {
    this._paydata.getAllPaymentJoin().subscribe(
      (data:Paymentclass[])=>{
        this.payarr=data;
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("All Display done");
      }
    );
  }
}
