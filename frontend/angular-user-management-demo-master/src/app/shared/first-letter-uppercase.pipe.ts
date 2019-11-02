import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUppercase'
})
export class firstLetterUppercase implements PipeTransform {

  transform(value: string, args?: any): any {
    return (!!value.length) ? ( value[0].toUpperCase() + value.substr(1) ) : value;
  }

}
