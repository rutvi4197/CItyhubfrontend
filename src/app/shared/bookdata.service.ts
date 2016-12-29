import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import 'rxjs/Rx';
import { Bookclass } from './bookclass';
@Injectable()
export class BookdataService {
private url:string="http://localhost:3000/ticketcnt/";
  constructor(private _http:Http) { }
  getAlldetails(id:number)
  {
    return this._http.get(this.url+id).map(
      (res:Response)=>res.json()
    );
  }

}
