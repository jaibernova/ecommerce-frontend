import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  criteria: any = {};
  results: any[] = [];

  constructor(private productService: ProductService) {}

  search() {
    this.productService.searchProducts(this.criteria).subscribe(data => {
      this.results = data;
    });
  }
}
