/**
 * Configuration options for the filter pipe
 * @see FilterPipe
 */
export class Filter {

  setField(value: any, key: string = '') {

    let actualValue: any

    if (value instanceof KeyboardEvent) {
      if(value.target instanceof HTMLInputElement) {
        actualValue = value.target.value;
      }
    }

    if (!actualValue) {
      actualValue = value;
    }

    if (!key) {
      this.filterAny = actualValue;
    }
    else {
      this.filterField[key] = actualValue;
    }
  }

  setCaseSensitive(value: boolean) {
    this.filterOptions.caseSensitive = value;
  }

  excludeKey(key: string) {
    this.filterOptions.excludedKeys.push(key)
  }

  private filterField: any = {}
  private filterAny: string = ""

  private filterOptions = {
    caseSensitive: false,
    excludedKeys: new Array<string>,
  }

  filter(collection: any[]) {
    if (!collection) { return collection }

    const filteredField = this.filterByField(collection)
    const filtered = this.filterByAny(filteredField)

    return filtered;
  }

  private filterByField(collection: any[]) {

    const filtered = collection.filter((collectionItem) => {
      for (const key of Object.keys(this.filterField)) {

        const filterValue = this.filterField[key];
        const searchTerm = this.getSearchTerm(filterValue)

        const fieldValue = collectionItem[key]

        if (!searchTerm.test(fieldValue)) {
          return false
        }
      }

      return true
    })

    return filtered;
  }

  private filterByAny(collection: any[]) {
    const filtered = collection.filter((collectionItem) => {
      const searchTerm = this.getSearchTerm(this.filterAny)

      for (const key of Object.keys(collectionItem)) {
        if (searchTerm.test(collectionItem[key]) &&
          !this.filterOptions.excludedKeys.includes(key)) {
          return true
        }
      }

      return false
    })

    return filtered;
  }

  private getSearchTerm(searchFor: any) {
    return (!this.filterOptions.caseSensitive) ?
      new RegExp(searchFor, 'i') :
      new RegExp(searchFor);
  }
}
