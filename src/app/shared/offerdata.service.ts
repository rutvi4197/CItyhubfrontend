import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import { Offerclass } from './offerclass';
import { Offermainclass } from './offermainclass';
import 'rxjs/Rx';

@Injectable()
export class OfferdataService {
public url:string="http://localhost:3000/offer/";
public eventurl:string="http://localhost:3000/event/";
  constructor(private _http:Http) { }
    getAllEvent()
  {
     return this._http.get(this.eventurl).map(
      (res:Response)=>res.json()
    );
  }
getAllOffer()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
    getOfferById(id:number)
  {
    return this._http.get(this.url+id).map(
      (res:Response)=>res.json()
    );
  }
   editoffer(item:Offerclass)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.put(this.url+item.pk_offer_id,body,option).map(
      (res:Response)=>res.json()
    );
  }
  addoffer(item:Offerclass)
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url,body,option).map(
      (res:Response)=>res.json()
    );
  }
  deletealloffer(item:Offerclass[])
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url+0,body,option).map(
      (res:Response)=>res.json()
    );
  }

  deleteoffer(Id:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this.url+Id,req);
}
}
