import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
<<<<<<< HEAD
import { Userclass } from './userclass';
=======
>>>>>>> ac686fd21d8f43d923c5e57dee4ef335580ecd1b
import 'rxjs/Rx';

@Injectable()
export class UserdataService {

  private url:string="http://localhost:3000/users/";
  private url1:string="http://localhost:3000/userdetails/";

  constructor(private _http:Http) { }
  
  getAllUser()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }

  getAllUserJoin()
  {
    return this._http.get(this.url1).map(
      (res:Response)=>res.json()
    );
  }

  getUserbyId(id:number)
  {
    return this._http.get(this.url+id).map(
      (res:Response)=>res.json()
    );
  }

  updateUser(item:Userclass)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.put(this.url+item.pk_email_id,body,option).map(
      (res:Response)=>res.json()
    );
  }

  deleteUser(Id:string)
  {
    let header=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:header});
    return this._http.delete(this.url+'Id',req);
  }


}
