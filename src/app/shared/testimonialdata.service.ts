import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import { Testimonialclass} from './testimonialclass';
import 'rxjs/Rx';

@Injectable()
export class TestimonialdataService {


  private url:string="http://localhost:3000/testimonial/";
  constructor(private _http:Http,) { }
  getAllTestimonial()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
  deleteTestimonial(Id:number)
  { 
    let headers=new Headers({'Content-Type':'application/json'});
    let req=new RequestOptions({headers:headers});
    return this._http.delete(this.url+Id,req); 
  }

}
