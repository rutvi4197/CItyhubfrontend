import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response,Headers } from '@angular/http';
import { Ansclass } from './ansclass';
import 'rxjs/Rx';
@Injectable()
export class AnsdataService {
public url:string="http://localhost:3000/ansdetails/";
public url1:string="http://localhost:3000/ans/";
public url2:string="http://localhost:3000/ansget/";

  constructor(private _http:Http) { }
 getAllAns()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
  ansGetById(Id:number)
  {
    return this._http.get(this.url2+Id).map(
      (res:Response)=>res.json()
    );
  }
 
 deleteans(Id:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this.url1+Id,req);
}
  getAnsbyId(id:number)
  {
    return this._http.get(this.url1+id).map(
      (res:Response)=>res.json()
    );
  }
   editans(item:Ansclass)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.put(this.url1+item.pk_ans_id,body,option).map(
      (res:Response)=>res.json()
    );
  }
  addans(item:Ansclass)
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url1,body,option).map(
      (res:Response)=>res.json()
    );
  }

  deleteallans(item:Ansclass[])
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this.url1+1,body,req).map(
    (res:Response)=>res.json()
    
  );
}
}
