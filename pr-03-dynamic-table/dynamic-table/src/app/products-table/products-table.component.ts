import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-table',
  standalone: true,
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
  imports: [CommonModule]
})
export class ProductsTableComponent {

  products = [
    { name: 'USB Cable', category: 'Electronics', price: 25, stockCount: 10 },
    { name: 'Laptop', category: 'Electronics', price: 850, stockCount: 3 },
    { name: 'Notebook', category: 'Stationery', price: 5, stockCount: 0 },
    { name: 'Coffee Mug', category: 'Kitchen', price: 12, stockCount: 15 },
    { name: 'Smartphone', category: 'Electronics', price: 450, stockCount: 0 },
    { name: 'Backpack', category: 'Travel', price: 60, stockCount: 7 }
  ];

}
