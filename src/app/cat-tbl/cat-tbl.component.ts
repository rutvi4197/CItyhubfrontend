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

 
catarr:Catclass[]=[];

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

  updateCat(item:Catclass)
  {
    this._router.navigate(['/editcat',item.pk_cat_id]);
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
