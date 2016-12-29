import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Catclass } from '../shared/catclass';
import { CatdataService } from '../shared/catdata.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.css']
})
export class EditcatComponent implements OnInit {


public _subscription:Subscription;
public catarr:Catclass[]=[];
public pk_cat_id:number;
public cat_name:string;
  constructor(private _catdataservice:CatdataService,private _router:Router,private _acrouter:ActivatedRoute ) { }

  ngOnInit() {
     this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.pk_cat_id=params["id"];
       
      }
    );
    this._catdataservice.getCatById(this.pk_cat_id).subscribe(
      (data:Catclass[])=>{
        this.catarr=data;
        this.cat_name=this.catarr[0].cat_name;
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
updateCat()
{
  this._catdataservice.updateCat(new Catclass(this.pk_cat_id,this.cat_name)).subscribe(
    (data:any)=>
    {
      this._router.navigate(['/allcat']);
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
