import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anspipe'
})
export class AnspipePipe implements PipeTransform {

ans:any[]=[];
ans1:any[]=[];
ans2:any[]=[];
  transform(value: any[], args: any): any {
     if(args!='')
    {
     this.ans=value.filter(res=>res.que_desc.startsWith(args));
     this.ans1=value.filter(res=>res.ans_desc.startsWith(args));
     this.ans2=value.filter(res=>res.user_name.startsWith(args));
    return this.ans.concat(this.ans1).concat(this.ans2);

    }
    else{
      return value;
    }
  }

}
