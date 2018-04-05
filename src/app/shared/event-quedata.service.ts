import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import { EventQueTbl } from './event-que-tbl';
import 'rxjs/Rx';
@Injectable()
export class EventQuedataService {
public url:string="http://localhost:3000/quedetails/";
public url1:string="http://localhost:3000/deleteallans/";
public url2:string="http://localhost:3000/event_que/";
public eventurl:string="http://localhost:3000/event/";
public ansurl:string="http://localhost:3000/ansget/";
  constructor(private _http:Http) { }
    getAllEvent()
  {
     return this._http.get(this.eventurl).map(
      (res:Response)=>res.json()
    );
  }
getAllQue()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
  getQueById(id:number)
  {
    return this._http.get(this.url2+id).map(
      (res:Response)=>res.json()
    );
  }
   deleteallque(item:EventQueTbl[])
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this.url2+1,body,req).map(
    (res:Response)=>res.json()
    
  );
}
 deleteQue(Id:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this.url2+Id,req);
 
}
deleteAns(Id:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
 return this._http.delete(this.ansurl+Id,req);
}
 editque(item:EventQueTbl)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.put(this.url2+item.pk_que_id,body,option).map(
      (res:Response)=>res.json()
    );
  }
  addque(item:EventQueTbl)
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url2,body,option).map(
      (res:Response)=>res.json()
    );
  }

}
