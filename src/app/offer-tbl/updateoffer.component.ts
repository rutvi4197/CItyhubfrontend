import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Offerclass } from '../shared/offerclass';
import { OfferdataService } from '../shared/offerdata.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-updateoffer',
  templateUrl: './updateoffer.component.html',
  styleUrls: ['./updateoffer.component.css']
})
export class UpdateofferComponent implements OnInit {
public _subscription:Subscription;
public offerarr:Offerclass[]=[];
public offer_id:number;
public fk_email_id:string;
public offer_photo:string;
public offer_promocode:string;
public offer_price:number;
public fk_event_id:number;
public user_name:string="";
public event_name:string="";
  constructor(private _dataservice:OfferdataService,private _router:Router,private _acrouter:ActivatedRoute) { }

  ngOnInit() {
     this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.offer_id=params["id"];
      }
     );
  this._dataservice.getOfferById(this.offer_id).subscribe(
      (data:Offerclass[])=>{
        this.offerarr=data;
        this.fk_event_id=this.offerarr[0].fk_event_id
          this.fk_email_id=this.offerarr[0].fk_email_id;
        this.offer_photo=this.offerarr[0].offer_photo;
        this.offer_promocode=this.offerarr[0].offer_promocode;
        this.offer_price=this.offerarr[0].offer_price;
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
  
editoffer()
{
  this._dataservice.editoffer(new Offerclass(this.offer_id,this.fk_email_id,this.offer_price,this.offer_promocode,this.offer_photo,
  this.fk_event_id,this.user_name,this.event_name)).subscribe(
    (data:any)=>
    {
      this._router.navigate(['/alloffer']);
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
