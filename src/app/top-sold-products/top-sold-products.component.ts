import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-top-sold-products',
  templateUrl: './top-sold-products.component.html',
  styleUrls: ['./top-sold-products.component.css']
})
export class TopSoldProductsComponent implements OnInit {
  topSoldProducts: any[] = [];

  constructor(private productService: ReportService) { }
  
  ngOnInit(): void {
    this.productService.getTopSoldProducts().subscribe(data => {
      console.log(data); // Añadir este log para verificar la respuesta
      this.topSoldProducts = data.map((product: any) => ({
        ...product,
        quantitySold: product.orders ? product.orders.length : 0
      }));
    });
  }
}
