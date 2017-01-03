import { Component, OnInit } from '@angular/core';
import { Eventclass } from '../shared/eventclass';
import { EventdataService } from '../shared/eventdata.service';

@Component({
  selector: 'app-reapprove',
  templateUrl: './reapprove.component.html',
  styles: []
})
export class ReapproveComponent implements OnInit {

public eventarr:Eventclass[]=[];
public flag:number;

constructor(private _Dataservice:EventdataService) { }

ngOnInit() {
    this._Dataservice.getDisEvent().subscribe(
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

apevent(item:Eventclass)
{
  console.log("aama gayu");
item.flag=1;
this._Dataservice.updateflag(item).subscribe(
  (data:any)=>{
  this.eventarr.splice(this.eventarr.indexOf(item),1);
  }
);
}

deleteevent(item:Eventclass){

    this._Dataservice.deleteEvent(item.pk_event_id).subscribe(
    (data:any)=>{
      this.eventarr.splice(this.eventarr.indexOf(item),1);
    },
    function(error)
    {

    },
    function()
    {
      console.log("delete successfully");
    }
    );
  }

}