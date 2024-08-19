import { Pipe, PipeTransform } from "@angular/core";
import { Pagination } from "./pagination";

export type PaginationCollection<T> = T[] | ReadonlyArray<T>;

@Pipe({
  name: 'pagination',
  standalone: true,
  pure: false
})
export class PaginationPipe implements PipeTransform {
  public transform(collection: any[], pagination: Pagination): any[] {

    if (!collection) {
      return [];
    }
    
    pagination.totalRows = collection.length

    // Reset to last page if out of bounds
    if (pagination.currentPage * pagination.pageSize > pagination.totalRows) [
      pagination.currentPage = Math.ceil(pagination.totalRows / pagination.pageSize) - 2
    ]

    if (pagination.currentPage < 1) {
      pagination.currentPage = 0
    }

    // Get slice start and end
    const sliceStart = pagination.currentPage * pagination.pageSize;
    const sliceEnd = sliceStart + pagination.pageSize;

    let filteredCollection = collection.slice(sliceStart, sliceEnd)
    return filteredCollection;
  }
}
