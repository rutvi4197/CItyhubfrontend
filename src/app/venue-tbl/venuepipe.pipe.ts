import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'venuepipe'
})
export class VenuepipePipe implements PipeTransform {

venue:any[]=[];
venue1:any[]=[];
venue2:any[]=[];

  transform(value: any[], args: any): any {
    if(args!='')
    {
     this.venue=value.filter(res=>res.venue_name.startsWith(args));
     this.venue1=value.filter(res=>res.venue_address.startsWith(args));
     this.venue2=value.filter(res=>res.city_name.startsWith(args));
     return this.venue.concat(this.venue1).concat(this.venue2);

    }
    else{
      return value;
    }
  }
  
}
