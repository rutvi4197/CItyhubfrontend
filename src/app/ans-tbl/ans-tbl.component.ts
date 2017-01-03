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
  constructor(private _dataservice:AnsdataService,private _eventdata:EventQuedataService,private _acrouter:ActivatedRoute,private _router:Router) { }

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
    this._dataservice.getAllAns().subscribe(
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
  addAns()
  {
    this._router.navigate(['/addans']);
  }
  updateAns(item:Ansclass)
  {
    this._router.navigate(['/editans',item.pk_ans_id]);
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

}
