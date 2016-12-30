import { Component, OnInit } from '@angular/core';
import { Catclass } from '../shared/catclass';
import { CatdataService } from '../shared/catdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent implements OnInit {

 
  pk_cat_id:number=null;
  cat_name:string='';
  
  constructor(private _catdata:CatdataService,private _router:Router) { }

  ngOnInit() {
  }


  addCat()
  {
    this._catdata.addCat(new Catclass(this.pk_cat_id,this.cat_name))
    .subscribe(
      (data:any)=>{
         this._router.navigate(['/allcat']);
      },
      function(error){},
      function()
      {
        alert("Added");
      }
    );
  } 
}
