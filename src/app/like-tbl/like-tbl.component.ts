import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Likeclass } from '../shared/likeclass';
import { LikedataService } from '../shared/likedata.service';
@Component({
  selector: 'app-like-tbl',
  templateUrl: './like-tbl.component.html',
  styleUrls: ['./like-tbl.component.css']
})
export class LikeTblComponent implements OnInit {
public likearr:Likeclass[]=[];
public delarr:Likeclass[]=[];
i:number=0;
  constructor(private _dataservice:LikedataService,private _router:Router) { }

  ngOnInit() {
    this._dataservice.getAllLike().subscribe(
      (data:Likeclass[])=>{
        this.likearr=data;
      }
    );
  }
   
  editlike(item:Likeclass)
  {
    this._router.navigate(['/editlike',item.fk_event_id]);
  }
 
  addarr(item:Likeclass)
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
    console.log("Deleteall");
  this._dataservice.deleteall(this.delarr).subscribe(
      (data:Likeclass[])=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.likearr.find(x=>x==this.likearr[this.i]))
            {
              this.likearr.splice(this.likearr.indexOf(this.delarr[this.i]),1);
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
