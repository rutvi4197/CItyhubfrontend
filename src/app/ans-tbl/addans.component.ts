import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Ansclass } from '../shared/ansclass';
import { AnsdataService } from '../shared/ansdata.service';
import { EventQueTbl } from '../shared/event-que-tbl';
import { EventQuedataService } from '../shared/event-quedata.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-addans',
  templateUrl: './addans.component.html',
  styles: []
})
export class AddansComponent implements OnInit {
public _subscription:Subscription;
public ansarr:Ansclass=new Ansclass('',0,0,0,'','','','','');
public ans_date:string;
public ans_desc:string;
public fk_que_id:number;
public fk_event_id:number;
dt:Date;
  constructor(private _ansdataservice:AnsdataService,private _router:Router,private _acrouter:ActivatedRoute) { }

  ngOnInit() {
     this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.fk_que_id=params["id"];
       this.fk_event_id=params["eventid"];
      }
    );
     console.log(this.ansarr.fk_que_id);
    console.log(this.ansarr.fk_event_id);
   
  }
  addans()
  {
  
   /* this.ansarr.ans_date=this.dt.getDate+"-";
    this.ansarr.ans_date+=this.dt.getMonth+"-";
    this.ansarr.ans_date+=this.dt.getFullYear+"-";*/
    this.ansarr.fk_que_id=this.fk_que_id;
    this.ansarr.fk_event_id=this.fk_event_id;
   
    this._ansdataservice.addans(this.ansarr).subscribe(
      (data:any)=>{
         this._router.navigate(['/allans',this.fk_que_id]);
      },
      function(error){},
      function()
      {
        alert("Added");
      }
    );
  }

}
