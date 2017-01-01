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
  ticketinfo(item:Eventclass)
  {
    this._router.navigate(['/bookevent',item.pk_event_id]);
  }
addevent()
{
  this._router.navigate(['/addevent']);
}
editevent(item:Eventclass)
{
  this._router.navigate(['/editevent',item.pk_event_id]);
}
  deletecity(item:Eventclass){
    this._Dataservice.deleteEvent(item.pk_event_id).subscribe(
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
}
