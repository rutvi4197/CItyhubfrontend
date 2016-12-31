import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import { Userclass} from './userclass';
import 'rxjs/Rx';

@Injectable()
export class UserdataService {

constructor(private _http:Http,) { }
  private url:string="http://localhost:3000/users/";
  private url1:string="http://localhost:3000/userdetails/";
 
 getAllVenue()
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
  deleteUser(Id:string)
  { 
    let headers=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:headers});
    return this._http.delete(this.url+Id,req); 
  }

}
