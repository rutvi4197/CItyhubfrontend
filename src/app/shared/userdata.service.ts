import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import { Userclass} from './userclass';
import 'rxjs/Rx';

@Injectable()
export class UserdataService {

constructor(private _http:Http,) { }
  private url:string="http://localhost:3000/users/";
  private url1:string="http://localhost:3000/userdetails/";
  private caturl:string="http://localhost:3000/cities";
 
 getAllUser()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
  getAllCity()
  {
      return this._http.get(this.caturl).map(
      (res:Response)=>res.json()
    );
  }
  getUserbyId(id:string)
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
   deletealluser(item:Userclass[])
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.post(this.url+0,body,option).map(
      (res:Response)=>res.json()
    );
  }
  addUser(item:Userclass)
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url,body,option).map(
      (res:Response)=>res.json()
    );
  }

  
  getAllUserJoin()
  {
    return this._http.get(this.url1).map(
      (res:Response)=>res.json()
    );
  }
  deleteUser(Id:string)
  { 
    let headers=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:headers});
    return this._http.delete(this.url+Id,req); 
  }

}
