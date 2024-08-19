import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  standalone: true
})
export class OrderbyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
