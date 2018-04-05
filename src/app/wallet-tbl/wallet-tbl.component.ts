import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Walletclass } from '../shared/walletclass';
import { WalletdataService } from '../shared/walletdata.service';

@Component({
  selector: 'app-wallet-tbl',
  templateUrl: './wallet-tbl.component.html',
  styleUrls: ['./wallet-tbl.component.css']
})
export class WalletTblComponent implements OnInit {

i:number=0;
walarr:Walletclass[]=[];
public delarr:Walletclass[]=[];
  constructor(private _waldata:WalletdataService,private _router:Router)
  {

  }

  ngOnInit() {
    this._waldata.getAllWalletJoin().subscribe(
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
  addarr(item:Walletclass)
  {
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item);
    }
  }
   deleteall()
  {
    
  this._waldata.deleteallwallet(this.delarr).subscribe(
      (data:Walletclass[])=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.walarr.find(x=>x==this.walarr[this.i]))
            {
              this.walarr.splice(this.walarr.indexOf(this.delarr[this.i]),1);
            }
          }
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("successfully delete");
      }
    );
  
  }
  addwallet()
  {
    this._router.navigate(['/addwallet']);
  }
  editwallet(item:Walletclass)
  {
    this._router.navigate(['/editwallet',item.pk_wallet_id]);
  }
  deletewallet(item:Walletclass){
    this._waldata.deletewallet(item.pk_wallet_id).subscribe(
    (data:any)=>{
      this.walarr.splice(this.walarr.indexOf(item),1);
    },
    function(error)
    {

    },
    function()
    {
      alert("delete successfully");
    }
    );
  }
}
