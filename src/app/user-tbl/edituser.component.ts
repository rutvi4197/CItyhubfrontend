import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Userclass } from '../shared/userclass';
import { UserdataService } from '../shared/userdata.service';
import { Subscription } from 'rxjs/Rx';
import { Cityclass } from '../shared/cityclass';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
public cityarr:Cityclass[]=[];
public _subscription:Subscription;
public userarr:Userclass[]=[];
public pk_email_id:string='';
public user_password:string;
public user_mobile_no:string;
public user_name:string;
<<<<<<< HEAD
public pk_city_id:number;
=======
public fk_city_id:number;
>>>>>>> 00c440d53d6a54b03df92e58ac0b6fee80ad53ce
public user_type:string;

  constructor(private _userdataservice:UserdataService,private _router:Router,private _acrouter:ActivatedRoute ) { }

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
  
     this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.pk_email_id=params["id"];
       
      }
    );
    this._userdataservice.getUserbyId(this.pk_email_id).subscribe(
      (data:Userclass[])=>{
        this.userarr=data;
        this.user_mobile_no=this.userarr[0].user_mobile_no;
        this.user_name=this.userarr[0].user_name;
        this.user_type=this.userarr[0].user_type;
<<<<<<< HEAD
        this.pk_city_id=this.userarr[0].fk_city_id;
=======
        this.fk_city_id=this.userarr[0].fk_city_id;
>>>>>>> 00c440d53d6a54b03df92e58ac0b6fee80ad53ce
     
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
updateUser()
{
<<<<<<< HEAD
  this._userdataservice.updateUser(new Userclass(this.pk_email_id,this.user_password,this.user_mobile_no,this.user_name,this.pk_city_id,this.user_type,'')).subscribe(
=======
  this._userdataservice.updateUser(new Userclass(this.pk_email_id,this.user_password,this.user_mobile_no,this.user_name,this.fk_city_id,this.user_type,'')).subscribe(
>>>>>>> 00c440d53d6a54b03df92e58ac0b6fee80ad53ce
    (data:any)=>
    {
      this._router.navigate(['/alluser']);
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
