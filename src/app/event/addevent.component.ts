import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emailid } from '../shared/emailid';
import { Eventclass } from '../shared/eventclass';
import { Catclass } from '../shared/catclass';
import { EventdataService } from '../shared/eventdata.service';
import { Offerclass } from '../shared/offerclass';
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styles: []
})
export class AddeventComponent implements OnInit {
public eventarr:Eventclass=new Eventclass(0,'','','','',0,'','',0,0,'',0,0,0);
public catarr:Catclass[]=[];
public offerarr:Offerclass[]=[];
pk_cat_id:number;
pk_offer_id:number;
email:string="shahritu2111@gmail.com";
  constructor(private _eventdata:EventdataService,private _router:Router) { }

  ngOnInit() {
    //console.log(this.email.email_id);
    this._eventdata.getallcat().subscribe(
      (data:Catclass[])=>{
       this.catarr=data;
       this.pk_cat_id=this.catarr[0].pk_cat_id;
},
function(error){
  console.log(error);
},
function()
{

}
  );
  this._eventdata.getalloffer().subscribe(
      (data:Offerclass[])=>{
       this.offerarr=data;
     this.pk_offer_id=this.offerarr[0].pk_offer_id;
},
function(error){
  console.log(error);
},
function()
{

}
  );

  }
addevent()
{
  this.eventarr.fk_cat_id=this.pk_cat_id;
  this.eventarr.fk_offer_id=this.pk_offer_id;
  this.eventarr.fk_email_id=this.email;
   this._eventdata.addevent(this.eventarr).subscribe(
      (data:any)=>{
       this._router.navigate(['/approve']);
},
function(error){
  console.log(error);
},
function()
{

}
  );

}
}
