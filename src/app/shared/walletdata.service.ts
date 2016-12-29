import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import { Walletclass } from './walletclass';
import 'rxjs/Rx';

@Injectable()
export class WalletdataService {

 constructor(private _http:Http,) { }
  private url:string="http://localhost:3000/wallet/";

 getAllWallet()
  {
    return this._http.get(this.url).map(
      (res:Response)=>res.json()
    );
  }
}
