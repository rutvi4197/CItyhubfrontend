import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventclass } from '../shared/eventclass';
import { EventdataService } from '../shared/eventdata.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
public eventarr:Eventclass[]=[];
public delarr:Eventclass[]=[];
i:number=0;
  constructor(private _Dataservice:EventdataService,private _router:Router) { }

  ngOnInit() {
     this._Dataservice.getAllEvent().subscribe(
      (data:Eventclass[])=>{
          this.eventarr=data;
      },
      function(error)
      {

      },
      function()
      {
        console.log("successfully get");
      }
    );
  }
  addarr(item:Eventclass)
  {
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item);
    }
  }
  ticketinfo(item:Eventclass)
  {
    this._router.navigate(['/bookevent',item.pk_event_id]);
  }
  comment(item:Eventclass)
  {
    this._router.navigate(['/comment',item.pk_event_id]);
  }
addevent()
{
  this._router.navigate(['/addevent']);
}
editevent(item:Eventclass)
{
  this._router.navigate(['/editevent',item.pk_event_id]);
}
  deleteevent(item:Eventclass){
    this._Dataservice.deleteEvent(item).subscribe(
    (data:any)=>{
      this.eventarr.splice(this.eventarr.indexOf(item),1);
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
  deleteall()
  {
    console.log("Deleteall");
  this._Dataservice.deleteall(this.delarr).subscribe(
      (data:Eventclass[])=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.eventarr.find(x=>x==this.eventarr[this.i]))
            {
              this.eventarr.splice(this.eventarr.indexOf(this.delarr[this.i]),1);
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
