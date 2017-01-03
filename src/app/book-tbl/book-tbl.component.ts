import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookclass } from '../shared/bookclass';
import { BookdataService } from '../shared/bookdata.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-book-tbl',
  templateUrl: './book-tbl.component.html',
  styleUrls: ['./book-tbl.component.css']
})
export class BookTblComponent implements OnInit {
public bookarr:Bookclass[]=[];
public fk_event_id:number;
public _subscription:Subscription;
  constructor(private _dataservice:BookdataService,private _acrouter:ActivatedRoute) { }

  ngOnInit() {
    this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.fk_event_id=params["id"];
       
      }
    );
    this._dataservice.getAlldetails(this.fk_event_id).subscribe(
      (data:Bookclass[])=>{
        this.bookarr=data;
      },
      function(error)
      {

      },
      function()
      {
        console.log("successfully get data");
      }
    );
  }
  
}
