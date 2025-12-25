import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByField',
  pure: false
})
export class FilterByFieldPipe implements PipeTransform {

  transform(items: any[], field: string, searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    return items.filter(item =>
      item[field].toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
