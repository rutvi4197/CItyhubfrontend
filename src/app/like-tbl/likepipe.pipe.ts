import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'likepipe'
})
export class LikepipePipe implements PipeTransform {

 like:any[]=[];
    transform(value: any[], args: any): any {
      if(args!='')
      {
      return this.like=value.filter(res=>res.event_name.startsWith(args));
      }
      else{
        return value;
      }
    }

}
