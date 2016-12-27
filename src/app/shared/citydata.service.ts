import { Injectable } from '@angular/core';
import { Cityclass } from './cityclass';
import { Http,ResponseOptions,Headers ,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CitydataService {
private url:string="http://localhost:3000/cities/";
  constructor(private _http:Http,) { }
  getAllCity()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }

}
