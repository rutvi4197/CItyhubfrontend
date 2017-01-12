import { Component, OnInit } from '@angular/core';
import { Userclass } from '../shared/userclass';
import { UserdataService } from '../shared/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-tbl',
  templateUrl: './user-tbl.component.html',
  styleUrls: ['./user-tbl.component.css']
})
export class UserTblComponent implements OnInit {
delarr:Userclass[]=[];
i:number;
 userarr:Userclass[]=[];

  constructor(private _userdata:UserdataService,private _router:Router)
   {

  }

  ngOnInit() {
    this._userdata.getAllUserJoin().subscribe(
      (data:Userclass[])=>{
        this.userarr=data;
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
   deleteall()
  {
    console.log("Deleteall");
  this._userdata.deletealluser(this.delarr).subscribe(
      (data:Userclass[])=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.userarr.find(x=>x==this.userarr[this.i]))
            {
              this.userarr.splice(this.userarr.indexOf(this.delarr[this.i]),1);
            }
          }
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        alert("successfully delete");
      }
    );
  
  }
  addarr(item:Userclass)
  {
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item);
    }
  }
  addUser()
  {
    this._router.navigate(['/adduser']);
  }
  updateUser(item:Userclass)
  {
    this._router.navigate(['/edituser',item.pk_email_id]);
  }

  deleteUser(item:Userclass)
  {
    this._userdata.deleteUser(item).subscribe(
      (data:any)=>{
        this.userarr.splice(this.userarr.indexOf(item),1);
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
