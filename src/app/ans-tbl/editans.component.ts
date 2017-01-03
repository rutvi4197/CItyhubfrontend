import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Ansclass } from '../shared/ansclass';
import { AnsdataService } from '../shared/ansdata.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-editans',
  templateUrl: './editans.component.html',
  styles: []
})
export class EditansComponent implements OnInit {
public _subscription:Subscription;
public ansarr:Ansclass[]=[];
public pk_ans_id:number;
public ans_date:string;
public ans_desc:string;
  constructor(private _ansdataservice:AnsdataService,private _router:Router,private _acrouter:ActivatedRoute ) { }

  ngOnInit() {
     this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.pk_ans_id=params["id"];
       
      }
    );
    this._ansdataservice.getAnsbyId(this.pk_ans_id).subscribe(
      (data:Ansclass[])=>{
        this.ansarr=data;
        console.log(this.ansarr[0]);
        this.ans_desc=this.ansarr[0].ans_desc;
        this.ans_date=this.ansarr[0].ans_date;
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
editAns()
{
  this._ansdataservice.editans(new Ansclass('',this.pk_ans_id,0,0,'',this.ans_desc,this.ans_date,
  '','')).subscribe(
    (data:any)=>
    {
      this._router.navigate(['/allans']);
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
