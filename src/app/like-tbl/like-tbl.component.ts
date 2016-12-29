import { Component, OnInit } from '@angular/core';
import { Likeclass } from '../shared/likeclass';
import { LikedataService } from '../shared/likedata.service';
@Component({
  selector: 'app-like-tbl',
  templateUrl: './like-tbl.component.html',
  styleUrls: ['./like-tbl.component.css']
})
export class LikeTblComponent implements OnInit {
public likearr:Likeclass[]=[];
  constructor(private _dataservice:LikedataService) { }

  ngOnInit() {
    this._dataservice.getAllLike().subscribe(
      (data:Likeclass[])=>{
        this.likearr=data;
      }
    );
  }

}
