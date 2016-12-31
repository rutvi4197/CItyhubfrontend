import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventfilter'
})
export class EventfilterPipe implements PipeTransform {
event:any[]=[];
event1:any[]=[];
eventprice:any[]=[];
  transform(value: any[], args: any): any {
     if(args!='')
    {
     this.event=value.filter(res=>res.event_name.startsWith(args));
     this.event1=value.filter(res=>res.event_des.startsWith(args));
    // this.eventprice=value.filter(res=>res.event_price.startsWith(args));
    return this.event.concat(this.event1);

    }
    else{
      return value;
    }
  }

}
