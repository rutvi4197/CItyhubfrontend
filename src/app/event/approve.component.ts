import { Component, OnInit } from '@angular/core';
import { Eventclass } from '../shared/eventclass';
import { Emailid } from '../shared/emailid';
import { EventdataService } from '../shared/eventdata.service';
@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
public eventarr:Eventclass[]=[];
public flag:number;
email:Emailid;
delarr:Eventclass[]=[];
i:number;
  constructor(private _Dataservice:EventdataService) { }

  ngOnInit() {
  // console.log(this.email.email_id);
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
addarr(item:Eventclass)
  {
    if(this.delarr.find(x=>x==item))
    {
      item.flag=0;
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      item.flag=1;
      this.delarr.push(item);
    }
  }
   approveall()
  {
  this._Dataservice.approveall(this.delarr).subscribe(
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
