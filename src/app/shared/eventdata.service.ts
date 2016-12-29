import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import { Eventclass } from './eventclass';
import 'rxjs/Rx';
@Injectable()
export class EventdataService {
public url:string="http://localhost:3000/approvevent/";
public url1:string="http://localhost:3000/event/";
  constructor(private _http:Http) { }
  getforapprove()
  {
    return this._http.get(this.url).map(
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
  return this._http.delete(this.url+Id,req);
 
}

}
