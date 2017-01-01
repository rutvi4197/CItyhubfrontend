import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Catclass } from './catclass';
import 'rxjs/Rx';

@Injectable()
export class CatdataService {

 constructor(private _http:Http) { }

  private url:string="http://localhost:3000/cat/";

  getAllCat()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }
  getCatById(id:number)
  {
    return this._http.get(this.url+id).map((res:Response)=>res.json());
  }
  addCat(item:Catclass)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:headers});
    return this._http.post(this.url,body,req).map((res:Response)=>res.json());
  }
  deleteCat(Id:number)
  { 
    let headers=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:headers});
    return this._http.delete(this.url+Id,req); 
  }

  updateCat(item:Catclass)
  {
    let body=JSON.stringify(item);
    let headers=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:headers});
    return this._http.put(this.url+item.pk_cat_id,body,req).map((res:Response)=>res.json()); 
  }
  deleteallcat(item:Catclass[])
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:header});
    return this._http.post(this.url+1,body,req).map(
      (res:Response)=>res.json()    
    );
  }
}
