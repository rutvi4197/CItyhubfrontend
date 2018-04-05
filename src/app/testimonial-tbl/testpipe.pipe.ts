import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

test:any[]=[];
test1:any[]=[];

  transform(value: any[], args: any): any {
     if(args!='')
    {
     this.test=value.filter(res=>res.user_name.startsWith(args));
     this.test1=value.filter(res=>res.review_desc.startsWith(args));
     //this.eventprice=value.filter(res=>res.event_price.startsWith(args));
    return this.test.concat(this.test1);
    }
    else
    {
      return value;
    }
  }


}
