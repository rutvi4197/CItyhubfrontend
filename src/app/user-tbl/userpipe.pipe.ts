import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userpipe'
})
export class UserpipePipe implements PipeTransform {
user:any[]=[];
user1:any[]=[];
  transform(value: any[], args: any): any {
    if(args!='')
    {
     this.user=value.filter(res=>res.user_name.startsWith(args));
     this.user1=value.filter(res=>res.user_mobile_no.startsWith(args));
     //this.eventprice=value.filter(res=>res.event_price.startsWith(args));
    return this.user.concat(this.user1);

    }
    else{
      return value;
    }
  }

}
