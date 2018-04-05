import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Walletclass } from '../shared/walletclass';
import { WalletdataService } from '../shared/walletdata.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-editwallet',
  templateUrl: './editwallet.component.html',
  styleUrls: ['./editwallet.component.css']
})
export class EditwalletComponent implements OnInit {
public _subscription:Subscription;
public walletarr:Walletclass[]=[];
public wallet_id:number;
public fk_email_id:string;
public wallet_amnt:number;
public wallet_date:string;
  constructor(private _dataservice:WalletdataService,private _router:Router,private _acrouter:ActivatedRoute) { }

  ngOnInit() {
     this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.wallet_id=params["id"];
       
      }
    );
    this._dataservice.getwalletbyid(this.wallet_id).subscribe(
      (data:Walletclass[])=>{
        this.walletarr=data;
        this.fk_email_id=this.walletarr[0].fk_email_id;
        this.wallet_amnt=this.walletarr[0].wallet_amnt;
        this.wallet_date=this.walletarr[0].wallet_date;
      },
      function(error)
      {

      },
      function()
      {
        console.log("successfully get in edit");
      }
    );
  }
  editwallet()
  {
     this._dataservice.editwallet(new Walletclass(this.wallet_id,this.fk_email_id,this.wallet_amnt,
     this.wallet_date)).subscribe(
    (data:any)=>
    {
      this._router.navigate(['/allwallet']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("edited");
    }
  );
  }

}
