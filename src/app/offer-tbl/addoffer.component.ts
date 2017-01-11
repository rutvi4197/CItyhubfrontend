import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offerclass } from '../shared/offerclass';
import { OfferdataService } from '../shared/offerdata.service';
import { Eventclass } from '../shared/eventclass';
@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {
public offerarr:Offerclass=new Offerclass(0,'shahritu2111@gmail.com',0,'','',0,'','','');
public eventarr:Eventclass[]=[];
pk_event_id:number;

  constructor(private _dataservice:OfferdataService,private _router:Router) { }

  ngOnInit() {
     this._dataservice.getAllEvent().subscribe(
      (data:any)=>{
        this.eventarr=data;
        this.pk_event_id=this.eventarr[0].pk_event_id;
},
function(error){
  console.log(error);
},
function()
{

}
  );
  }
  addoffer()
  {
    this.offerarr.fk_event_id=this.pk_event_id;
     this._dataservice.addoffer(this.offerarr).subscribe(
      (data:any)=>{
        this._router.navigate(['/alloffer']);
     });
}

}
