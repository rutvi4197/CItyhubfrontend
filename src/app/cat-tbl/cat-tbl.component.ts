import { Component, OnInit } from '@angular/core';
import { Catclass } from '../shared/catclass';
import { CatdataService } from '../shared/catdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-tbl',
  templateUrl: './cat-tbl.component.html',
  styleUrls: ['./cat-tbl.component.css']
})
export class CatTblComponent implements OnInit {

 
public delarr:Catclass[]=[];
catarr:Catclass[]=[];
i:number=0;

  constructor(private _catdata:CatdataService,private _router:Router)
   {

   }

  ngOnInit() {
    this._catdata.getAllCat().subscribe(
      (data:Catclass[])=>{
        this.catarr=data;
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("All Display done");
      }
    );
  }

  addCat()
  {
    this._router.navigate(['/addcat']);
  }
  addarr(item:Catclass)
  {
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item);
    }
  }
  updateCat(item:Catclass)
  {
    this._router.navigate(['/editcat',item.pk_cat_id]);
  }
  deleteall()
  {
    console.log("Deleteall");
    this._catdata.deleteallcat(this.delarr).subscribe(
      (data:Catclass[])=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.catarr.find(x=>x==this.catarr[this.i]))
            {
              this.catarr.splice(this.catarr.indexOf(this.delarr[this.i]),1);
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

  deleteCat(item:Catclass)
  {
    this._catdata.deleteCat(item.pk_cat_id).subscribe(
      (data:any)=>{
        this.catarr.splice(this.catarr.indexOf(item),1);
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        alert("Deleted Successfully");
      }
    );
  }
}
