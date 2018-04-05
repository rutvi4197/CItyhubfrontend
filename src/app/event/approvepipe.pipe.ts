import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approvepipe'
})
export class ApprovepipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
