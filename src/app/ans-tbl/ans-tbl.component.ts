import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Ansclass } from '../shared/ansclass';
import { AnsdataService } from '../shared/ansdata.service';
import { EventQueTbl } from '../shared/event-que-tbl';
import { EventQuedataService } from '../shared/event-quedata.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-ans-tbl',
  templateUrl: './ans-tbl.component.html',
  styleUrls: ['./ans-tbl.component.css']
})
export class AnsTblComponent implements OnInit {
  public _subscription:Subscription;
public ansarr:Ansclass[]=[];
public quearr:EventQueTbl[]=[];
public pk_que_id:number;
public que_desc:string;
public event_name:string;
public user_name:string;
public delarr:Ansclass[]=[];
i:number;
  constructor(private _dataservice:AnsdataService,private _eventdata:EventQuedataService,private _acrouter:ActivatedRoute) { }

  ngOnInit() {
      this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.pk_que_id=params["id"];
       
      }
    );
    this._eventdata.getQueById(this.pk_que_id).subscribe(
      (data:EventQueTbl[])=>{
        this.quearr=data;
        this.que_desc=this.quearr[0].que_desc;
        this.event_name=this.quearr[0].event_name;
        this.user_name=this.quearr[0].user_name;
      },
      function(error)
      {

      },
      function()
      {
        console.log("Ans get");
      }
    );
    this._dataservice.getAnsbyId(this.pk_que_id).subscribe(
      (data:Ansclass[])=>{
        this.ansarr=data;
      },
      function(error)
      {

      },
      function()
      {
        console.log("Ans get");
      }
    );
  }
  deleteans(item:Ansclass)
  {
     this._dataservice.deleteans(item.pk_ans_id).subscribe(
    (data:any)=>{
      this.ansarr.splice(this.ansarr.indexOf(item),1);
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
   addarr(item:Ansclass)
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
      this._dataservice.deleteallans(this.delarr).subscribe(
      (data:Ansclass[])=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.ansarr.find(x=>x==this.ansarr[this.i]))
            {
              this.ansarr.splice(this.ansarr.indexOf(this.delarr[this.i]),1);
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
}
