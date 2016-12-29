import { Component, OnInit } from '@angular/core';
import { Eventclass } from '../shared/eventclass';
import { EventdataService } from '../shared/eventdata.service';
@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
public eventarr:Eventclass[]=[];
public flag:number;
  constructor(private _Dataservice:EventdataService) { }

  ngOnInit() {
    this._Dataservice.getforapprove().subscribe(
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
disevent(item:Eventclass)
{
  item.flag=2;
this._Dataservice.updateflag(item).subscribe(
  (data:any)=>{
    this.eventarr.splice(this.eventarr.indexOf(item),1);
  }
);
  
}
}
