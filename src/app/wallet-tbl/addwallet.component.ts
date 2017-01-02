import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Walletclass } from '../shared/walletclass';
import { WalletdataService } from '../shared/walletdata.service';

@Component({
  selector: 'app-addwallet',
  templateUrl: './addwallet.component.html',
  styleUrls: ['./addwallet.component.css']
})
export class AddwalletComponent implements OnInit {

public walletarr:Walletclass=new Walletclass(0,'',0,'');

  constructor(private _dataservice:WalletdataService,private _router:Router,private _acrouter:ActivatedRoute ) { }
  
  ngOnInit() {
     
  
  }
  addwallet()
  {
this._dataservice.addwallet(this.walletarr).subscribe(
      (data:any)=>{
        this._router.navigate(['/allwallet']);
      },
      function(error)
      {

      },
      function()
      {
        console.log("successfully add");
      }
    );
  }
}
