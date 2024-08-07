import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number = 0;
  product: any = {
    name: '',
    description: '',
    price: null,
    active: false
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Convert to number
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.id, this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
