import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'walletpipe'
})
export class WalletpipePipe implements PipeTransform {

wallet:any[]=[];

  transform(value: any[], args: any): any {
     if(args!='')
    {
     this.wallet=value.filter(res=>res.user_name.startsWith(args));
    return this.wallet;
    }
    else
    {
      return value;
    }
  }


}
