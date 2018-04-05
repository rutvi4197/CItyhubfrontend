import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import { Venueclass} from './venueclass';
import 'rxjs/Rx';

@Injectable()
export class VenuedataService {

  constructor(private _http:Http,) { }
  private url:string="http://localhost:3000/venue/";
  private url1:string="http://localhost:3000/venuedetails/";
  private caturl:string="http://localhost:3000/cities";
 
  getAllVenue()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
  getAllVenueJoin()
  {
    return this._http.get(this.url1).map(
      (res:Response)=>res.json()
    );
  }
  deleteVenue(Id:number)
  { 
    let headers=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:headers});
    return this._http.delete(this.url+Id,req); 
  }
  getAllCity()
  {
      return this._http.get(this.caturl).map(
      (res:Response)=>res.json()
    );
  }
  getVenuebyId(id:number)
  {
    return this._http.get(this.url+id).map(
      (res:Response)=>res.json()
    );
  }
  updateVenue(item:Venueclass)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.put(this.url+item.pk_venue_id,body,option).map(
      (res:Response)=>res.json()
    );
  }
  addVenue(item:Venueclass)
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url,body,option).map(
      (res:Response)=>res.json()
    );
  }
   deleteallvenue(item:Venueclass[])
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this.url+1,body,req).map(
    (res:Response)=>res.json()
    
  );
}
}
