import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: "lodashFilter",
  standalone: true
})
export class LodashFilterPipe implements PipeTransform {

  transform(array: any, filter: object | string): any[] {

    if (!array) {
      return []
    }

    if (!filter) {
      return array
    }

    if (typeof filter === 'string') {
      return array.filter((item: any) => {
        return item.toLowerCase().includes(filter.toLowerCase())
      })
    }

    return []
  }
}
