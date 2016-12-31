import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offerpipe'
})
export class OfferpipePipe implements PipeTransform {

offer:any[]=[];
offer1:any[]=[];
offer2:any[]=[];

    transform(value: any[], args: any): any {
      if(args!='')
      {
       this.offer=value.filter(res=>res.user_name.startsWith(args));
       this.offer1=value.filter(res=>res.event_name.startsWith(args));
       this.offer2=value.filter(res=>res.offer_promocode.startsWith(args));
    
     return this.offer.concat(this.offer1).concat(this.offer2);

      }
      else{
        return value;
      }
    }


}
