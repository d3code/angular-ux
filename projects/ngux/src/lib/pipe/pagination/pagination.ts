
/**
 * Pagination class functions for navigating through a paginated array of
 * objects to be passed in to the pagination pipe and components
 * 
 * @see PaginationPipe
 * @see PaginationControlsComponent
 */
export class Pagination {

  pageSize: number = 15;
  currentPage: number = 0;
  totalRows: number = 0;

  getTotalPages() {
    const pages = this.totalRows / this.pageSize
    const totalPages = Math.ceil(pages - 1);

    return totalPages < 1 ? 1 : totalPages;
  }

  nextPage() {
    if (this.currentPage == this.getTotalPages() - 1) {
      console.log('Already on last page');
      return;
    }

    this.currentPage++
  }

  previousPage() {
    if (this.currentPage == 0) {
      console.log('Already on first page');
      return;
    }
    this.currentPage--
  }

  /**
   * This function changes the number of rows to be displayed
   * in a list
   * 
   * @param pageSize the new page size
   */
   onPageSizeChange(pageSize: any) {

    console.log(pageSize.target.value);
    this.pageSize = Number(pageSize.target.value);
  }
}