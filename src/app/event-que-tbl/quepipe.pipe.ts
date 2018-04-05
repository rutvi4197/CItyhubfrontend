import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quepipe'
})
export class QuepipePipe implements PipeTransform {

que:any[]=[];
que1:any[]=[];
que2:any[]=[];
  transform(value: any[], args: any): any {
     if(args!='')
    {
     this.que=value.filter(res=>res.que_desc.startsWith(args));
     this.que1=value.filter(res=>res.event_name.startsWith(args));
     this.que2=value.filter(res=>res.user_name.startsWith(args));
    return this.que.concat(this.que1).concat(this.que2);

    }
    else{
      return value;
    }
  }
}
