import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers ,Response} from '@angular/http';
import { Walletclass } from './walletclass';
import 'rxjs/Rx';

@Injectable()
export class WalletdataService {

 constructor(private _http:Http,) { }
  private url:string="http://localhost:3000/wallet/";
  private url1:string="http://localhost:3000/walletdetails/";

 getwalletbyid(id:number)
  {
    return this._http.get(this.url+id).map(
      (res:Response)=>res.json()
    );
  }
  getAllWalletJoin()
  {
    return this._http.get(this.url1).map(
      (res:Response)=>res.json()
    );
  }
  addwallet(item:Walletclass)
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url,body,option).map(
      (res:Response)=>res.json()
    );
  }
  editwallet(item:Walletclass)
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.put(this.url+item.pk_wallet_id,body,option).map(
      (res:Response)=>res.json()  
    );
  }
  deleteallwallet(item:Walletclass[])
  {
      let body=JSON.stringify(item);
    let header=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:header});
    return this._http.post(this.url+0,body,option).map(
      (res:Response)=>res.json()  
    );
  }
  deletewallet(id:number)
{
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  return this._http.delete(this.url+id,req);
}
}
