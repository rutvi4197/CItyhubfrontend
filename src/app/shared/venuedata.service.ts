import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import { Venueclass} from './venueclass';
import 'rxjs/Rx';

@Injectable()
export class VenuedataService {

   constructor(private _http:Http,) { }
  private url:string="http://localhost:3000/venue/";
  private url1:string="http://localhost:3000/venuedetails/";
 
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
}
