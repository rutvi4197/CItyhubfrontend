import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Eventclass } from '../shared/eventclass';
import { Catclass } from '../shared/catclass';
import { Offerclass } from '../shared/offerclass';
import { EventdataService } from '../shared/eventdata.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styles: []
})
export class EditeventComponent implements OnInit {
public _subscription:Subscription;
public catarr:Catclass[]=[];
public offerarr:Offerclass[]=[];
public eventarr:Eventclass[]=[];
public event_id:number;
public event_name:string;
event_logo:string;
event_slogan:string;
event_des:string;
event_date:string;
event_time:string;
event_price:number;
pk_cat_id:number;
fk_email_id:string;
pk_offer_id:number;
flag:number;
  constructor(private _dataservice:EventdataService,private _router:Router,private _acrouter:ActivatedRoute ) { }

  ngOnInit() {
      this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.event_id=params["id"];
       
      }
    );
     this._dataservice.geteventbyid(this.event_id).subscribe(
      (data:Eventclass[])=>{
        this.eventarr=data;
        this.event_name=this.eventarr[0].event_name;
        console.log(this.event_id);
        console.log(this.event_name);
         this.event_logo=this.eventarr[0].event_logo;
         this.event_des=this.eventarr[0].event_des;
          this.event_slogan=this.eventarr[0].event_slogan;
           this.event_date=this.eventarr[0].event_date;
            this.event_time=this.eventarr[0].event_time;
             this.event_price=this.eventarr[0].event_price;
              this.fk_email_id=this.eventarr[0].fk_email_id;
               this.pk_cat_id=this.eventarr[0].fk_cat_id;
               this.pk_offer_id=this.eventarr[0].fk_offer_id;
               this.flag=this.eventarr[0].flag;
      },
      function(error)
      {

      },
      function()
      {
        console.log("successfully get in edit");
      }
    );
    this._dataservice.getallcat().subscribe(
      (data:Catclass[])=>{
       this.catarr=data;
},
function(error){
  console.log(error);
},
function()
{

}
  );
  this._dataservice.getalloffer().subscribe(
      (data:Offerclass[])=>{
       this.offerarr=data;
       console.log("in offer");
},
function(error){
  console.log(error);
},
function()
{

}
  );

  }
editevent(){
 this._dataservice.editevent(new Eventclass(this.event_id,this.event_name,this.event_logo,
 this.event_slogan,this.event_des,0,this.event_date,this.event_time,this.event_price,this.pk_cat_id,
 this.fk_email_id,this.pk_offer_id,0,this.flag)).subscribe(
    (data:any)=>
    {
      this._router.navigate(['/allevent']);
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