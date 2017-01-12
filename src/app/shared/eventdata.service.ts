import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import { Eventclass } from './eventclass';
import 'rxjs/Rx';
@Injectable()
export class EventdataService {
public url:string="http://localhost:3000/approvevent/";
public url1:string="http://localhost:3000/event/";
public url2:string="http://localhost:3000/disapprovedetails/";
public url3:string="http://localhost:3000/deleteevent/";
public caturl:string="http://localhost:3000/cat/";
public offerurl:string="http://localhost:3000/offer/";

  constructor(private _http:Http) { }
  getforapprove()
  {
  
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
  getallcat()
  {
    return this._http.get(this.caturl).map((res:Response)=>res.json());
  }
   getalloffer()
  {
    return this._http.get(this.offerurl).map((res:Response)=>res.json());
  }
    geteventbyid(id:number)
  {
    return this._http.get(this.url1+id).map((res:Response)=>res.json());
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
 deleteEvent(item:Eventclass)
{ let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
  return this._http.put(this.url3+item.pk_event_id,body,option).map(
    (res:Response)=>res.json()
  );
  
 
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
   deleteall(item:Eventclass[])
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.post(this.url1+0,body,option).map(
      (res:Response)=>res.json()
    );
  }
   approveall(item:Eventclass[])
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.post(this.url+0,body,option).map(
      (res:Response)=>res.json()
    );
  }
  addevent(item:Eventclass)
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url1,body,option).map(
      (res:Response)=>res.json()
    );
  }



}
