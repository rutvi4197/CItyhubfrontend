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
  getlikebyId(id:number)
  {
    return this._http.get(this.url+id).map(
      (res:Response)=>res.json()
    );
  }  editLike(item:Likeclass)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.put(this.url+item.fk_event_id,body,option).map(
      (res:Response)=>res.json()
    );
  }
   deleteall(item:Likeclass[])
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.post(this.url+0,body,option).map(
      (res:Response)=>res.json()
    );
  }
 
}
