import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash-es';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, fields: string[] = [], direction: ('asc' | 'desc')[] = ['asc']): any[] {
    return orderBy(value, fields, direction);
  }
}
