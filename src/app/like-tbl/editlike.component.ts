import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Likeclass } from '../shared/likeclass';
import { LikedataService } from '../shared/likedata.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-editlike',
  templateUrl: './editlike.component.html',
  styles: []
})
export class EditlikeComponent implements OnInit {
public _subscription:Subscription;
public likearr:Likeclass[]=[];
public event_id:number=0;
public likecnt:number=0;
public dislikecnt:number=0;
  constructor(private _dataservice:LikedataService,private _router:Router,private _acrouter:ActivatedRoute ) { }

  ngOnInit() {
    this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.event_id=params["id"];
       
      }
    );
    this._dataservice.getlikebyId(this.event_id).subscribe(
      (data:Likeclass[])=>{
        this.likearr=data;
        this.likecnt=this.likearr[0].likecnt;
        this.dislikecnt=this.likearr[0].dislikecnt;
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
editlike()
{
  this._dataservice.editLike(new Likeclass(0,'','','','',0,'','',0,0,0,0,0,this.event_id,
  this.likecnt,this.dislikecnt)).subscribe(
    (data:any)=>
    {
      console.log("in edit");
      this._router.navigate(['/likeevent']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("edited");
    }
  );
}
}
