import { Component } from '@angular/core';
import { ProductsTableComponent } from './products-table/products-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ProductsTableComponent]
})
export class AppComponent {}
