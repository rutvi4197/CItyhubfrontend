import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import { Commentclass } from './commentclass';
import 'rxjs/Rx';
@Injectable()
export class CommentdataService {
public url:string="http://localhost:3000/comment/";
public eventurl:string="http://localhost:3000/event/";

  constructor(private _http:Http) { }
  getAllEvent()
  {
     return this._http.get(this.eventurl).map(
      (res:Response)=>res.json()
    );
  }
getAllComment()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
  getCommentById(id:number)
  {
    return this._http.get(this.url+id).map(
      (res:Response)=>res.json()
    );
  }
   deleteallcomment(item:Commentclass[])
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this.url+1,body,req).map(
    (res:Response)=>res.json()
    
  );
}
 deleteComment(Id:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this.url+Id,req);
 
}

 editcomment(item:Commentclass)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.put(this.url+item.pk_comment_id,body,option).map(
      (res:Response)=>res.json()
    );
  }
  addcomment(item:Commentclass)
  {
      let body=JSON.stringify(item);
      console.log(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url,body,option).map(
      (res:Response)=>res.json()
    );
  }

}
