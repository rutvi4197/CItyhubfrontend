import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reapprovepipe'
})
export class ReapprovepipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
