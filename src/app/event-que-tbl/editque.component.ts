import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { EventQueTbl } from '../shared/event-que-tbl';
import { EventQuedataService} from '../shared/event-quedata.service';
import { Eventclass } from '../shared/eventclass';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-editque',
  templateUrl: './editque.component.html',
  styles: []
})
export class EditqueComponent implements OnInit {
public quearr:EventQueTbl[]=[];
public eventarr:Eventclass[]=[];
public pk_que_id:number;
public pk_event_id:number;
public fk_email_id:string;
public que_desc:string;
public que_date:string;
public _subscription:Subscription;
  constructor(private _dataservice:EventQuedataService,private _router:Router,private _acrouter:ActivatedRoute) { }

  ngOnInit() {
     this._dataservice.getAllEvent().subscribe(
      (data:any)=>{
        this.eventarr=data;
},
function(error){
  console.log(error);
},
function()
{

}
  );
   this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.pk_que_id=params["id"];
       
      }
    );
    this._dataservice.getQueById(this.pk_que_id).subscribe(
      (data:EventQueTbl[])=>{
        this.quearr=data;
        this.fk_email_id=this.quearr[0].fk_email_id;
        this.que_desc=this.quearr[0].que_desc;
        this.que_date=this.quearr[0].que_date;
        this.pk_event_id=this.quearr[0].fk_event_id;
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
editque()
  {
      this.quearr[0].fk_event_id=this.pk_event_id;
    this._dataservice.editque(new EventQueTbl(this.pk_que_id,this.fk_email_id,this.pk_event_id,this.que_desc,this.que_date,
    '','','','',0,'','')).subscribe(
      (data:any)=>{
        this._router.navigate(['/allque']);
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
