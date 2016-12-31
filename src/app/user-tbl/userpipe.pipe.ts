import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userpipe'
})
export class UserpipePipe implements PipeTransform {
user:any[]=[];
user1:any[]=[];
user2:any[]=[];
user3:any[]=[];
  transform(value: any[], args: any): any {
    if(args!='')
    {
     this.user=value.filter(res=>res.user_name.startsWith(args));
     this.user1=value.filter(res=>res.pk_email_id.startsWith(args));
     this.user2=value.filter(res=>res.city_name.startsWith(args));
     this.user3=value.filter(res=>res.user_type.startsWith(args));
     return this.user.concat(this.user1).concat(this.user2).concat(this.user3);

    }
    else{
      return value;
    }
  }

}
