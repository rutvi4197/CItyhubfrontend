import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import { Venueclass} from './venueclass';
import 'rxjs/Rx';

@Injectable()
export class VenuedataService {

   constructor(private _http:Http,) { }
  private url:string="http://localhost:3000/venue/";
 getAllVenue()
  {
    return this._http.get(this.url).map(
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
