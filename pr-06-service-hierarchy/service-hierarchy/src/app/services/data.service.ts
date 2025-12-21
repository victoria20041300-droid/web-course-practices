import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: string[] = [
    'Item 1',
    'Item 2',
    'Item 3'
  ];

  getData(): string[] {
    return this.data;
  }
}
