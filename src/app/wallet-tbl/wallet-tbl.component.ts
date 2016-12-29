import { Component, OnInit } from '@angular/core';
import { Walletclass } from '../shared/walletclass';
import { WalletdataService } from '../shared/walletdata.service';

@Component({
  selector: 'app-wallet-tbl',
  templateUrl: './wallet-tbl.component.html',
  styleUrls: ['./wallet-tbl.component.css']
})
export class WalletTblComponent implements OnInit {


walarr:Walletclass[]=[];

  constructor(private _waldata:WalletdataService)
  {

  }

  ngOnInit() {
    this._waldata.getAllWallet().subscribe(
      (data:Walletclass[])=>{
        this.walarr=data;
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
