import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import { Eventclass } from './eventclass';
import 'rxjs/Rx';
@Injectable()
export class EventdataService {
public url:string="http://localhost:3000/approvevent/";
public url1:string="http://localhost:3000/event/";
public url2:string="http://localhost:3000/disapprovedetails/";

  constructor(private _http:Http) { }
  getforapprove()
  {
    console.log("hello from services");
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
  getDisEvent()
  {
    console.log("hello from services");
    return this._http.get(this.url2).map(
      (res:Response)=>res.json()
    );
  }
  getAllEvent()
  {
     return this._http.get(this.url1).map(
      (res:Response)=>res.json()
    );
  }
updateflag(item:Eventclass)
{
  let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
  return this._http.put(this.url+item.pk_event_id,body,option).map(
    (res:Response)=>res.json()
  );
}
 deleteEvent(Id:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this.url1+Id,req);
 
}
  editevent(item:Eventclass)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.put(this.url1+item.pk_event_id,body,option).map(
      (res:Response)=>res.json()
    );
  }
  addcity(item:Eventclass)
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url1,body,option).map(
      (res:Response)=>res.json()
    );
  }

  deleteallevent(item:Eventclass[])
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this.url1+1,body,req).map(
    (res:Response)=>res.json()
    
  );
}

}
