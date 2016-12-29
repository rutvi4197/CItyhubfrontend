import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import { Paymentclass } from './paymentclass';
import 'rxjs/Rx';

@Injectable()
export class PaymentdataService {

  private url:string="http://localhost:3000/payment/";
  constructor(private _http:Http,) { }
  getAllPayment()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }

}
