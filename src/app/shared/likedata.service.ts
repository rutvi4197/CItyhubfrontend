import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import { Likeclass } from './likeclass';
import 'rxjs/Rx';
@Injectable()
export class LikedataService {
public url:string="http://localhost:3000/like/";
  constructor(private _http:Http) { }
getAllLike()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
}
