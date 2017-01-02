import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import { Testimonialclass} from './testimonialclass';
import 'rxjs/Rx';

@Injectable()
export class TestimonialdataService {


  private url:string="http://localhost:3000/testimonial/";
  private url1:string="http://localhost:3000/test/";

  constructor(private _http:Http,) { }
  getAllTestimonial()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
  getTestimonialById(id:number)
  {
    return this._http.get(this.url+id).map(
      (res:Response)=>res.json()
    );
  }
  deleteTestimonial(Id:number)
  { 
    let headers=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:headers});
    return this._http.delete(this.url+Id,req); 
  }
  getAllTestimonialJoin()
  {
    return this._http.get(this.url1).map(
      (res:Response)=>res.json()
    );
  }
   deleteAllTestimonial(item:Testimonialclass[])
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.post(this.url+1,body,req).map(
    (res:Response)=>res.json()
    
  );
}
  updateTestimonial(item:Testimonialclass)
  {
    let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
   return this._http.put(this.url+item.pk_review_id,body,option).map(
      (res:Response)=>res.json()
    );
  }
  
}
