import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Commentclass } from '../shared/commentclass';
import { CommentdataService } from '../shared/commentdata.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
public commentarr:Commentclass[]=[];
public _subscription:Subscription;
public event_id:number;
public ans_desc:string;
public dt:Date=new Date();
public comment_date:string;
public arr:Commentclass;
fk_email_id:string="shahritu2111@gmail.com"
  constructor(private _dataservice:CommentdataService,private _router:Router,private _acrouter:ActivatedRoute) { }

  ngOnInit() {
     this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.event_id=params["id"];
        });
      
      this._dataservice.getCommentById(this.event_id).subscribe(
    (data:any)=>
    {
      this.commentarr=data;
    },
    function(error)
    { },
    function()
    {
      console.log("Get successfully");
    });
     
  }
addcomment()
{
  
     this.comment_date=this.dt.getDate()+"-";
     this.comment_date+=(this.dt.getMonth()+1)+"-";
     this.comment_date+=this.dt.getFullYear();
     this.arr=new Commentclass('','','',0,this.event_id,this.fk_email_id,this.ans_desc,this.comment_date);
     console.log(this.comment_date);
      this._dataservice.addcomment(this.arr).subscribe(
    (data:any)=>
    {
      this._router.navigate(['/allevent']);
    },
    function(error)
    { },
    function()
    {
      console.log("Add successfully");
    });
 
}
}
