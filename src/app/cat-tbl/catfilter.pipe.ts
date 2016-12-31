import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'catfilter'
})
export class CatfilterPipe implements PipeTransform {

cat:any[]=[];
  transform(value: any[], args: any): any {
    if(args!='')
    {
     this.cat=value.filter(res=>res.cat_name.startsWith(args));
     return this.cat;

    }
    else{
      return value;
    }
  }

}
