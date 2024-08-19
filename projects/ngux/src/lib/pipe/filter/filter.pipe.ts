import { Pipe, PipeTransform } from "@angular/core";
import { Filter } from "./filter";


@Pipe({
  name: "filter",
  standalone: true,
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], filter: Filter): any[] {
    return filter.filter(array)
  }
}
