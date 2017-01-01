import { Component, OnInit } from '@angular/core';
import { Userclass } from '../shared/userclass';
import { Cityclass } from '../shared/cityclass';
import { UserdataService } from '../shared/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
public cityarr:Cityclass[]=[];
public pk_email_id:string;
public user_password:string;
public user_mobile_no:string;
public user_name:string;
public pk_city_id:number;
public user_type:string;

  constructor(private _userdataservice:UserdataService,private _router:Router) { }

  

  ngOnInit() {
  
  
    this._userdataservice.getAllCity().subscribe(
      (data:Cityclass[])=>{
         this.cityarr=data;
      },
      function(error){},
      function()
      {
       console.log("city get")
      }
    );
  

  }


  addUser()
  {
    this._userdataservice.addUser(new Userclass(this.pk_email_id,this.user_password,this.user_mobile_no,this.user_name,this.pk_city_id,this.user_type))
    .subscribe(
      (data:any)=>{
         this._router.navigate(['/alluser']);
      },
      function(error){},
      function()
      {
        alert("Added");
      }
    );
  }

}
