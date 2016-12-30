import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offerclass } from '../shared/offerclass';
import { OfferdataService } from '../shared/offerdata.service';

@Component({
  selector: 'app-offer-tbl',
  templateUrl: './offer-tbl.component.html',
  styleUrls: ['./offer-tbl.component.css']
})
export class OfferTblComponent implements OnInit {
public offerarr:Offerclass[]=[];
  constructor(private _dataservice:OfferdataService,private _router:Router) { }

  ngOnInit() {
     this._dataservice.getAllOffer().subscribe(
      (data:Offerclass[])=>{
        this.offerarr=data;
      }
    );
  }
  addoffer()
  {
    this._router.navigate(['/addoffer']);
  }
  editoffer(item:Offerclass)
  {
     this._router.navigate(['/editoffer',item.pk_offer_id]);
  }
  
  deleteoffer(item:Offerclass)
  {
this._dataservice.deleteoffer(item.pk_offer_id).subscribe(
    (data:any)=>{
      this.offerarr.splice(this.offerarr.indexOf(item),1);
    },
    function(error)
    {

    },
    function()
    {
      console.log("delete successfully");
    }
    );
  }

}
