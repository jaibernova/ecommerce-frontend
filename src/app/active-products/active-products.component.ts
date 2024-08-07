import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-active-products',
  templateUrl: './active-products.component.html',
  styleUrls: ['./active-products.component.css']
})
export class ActiveProductsComponent implements OnInit {
  activeProducts: any[] = [];

  constructor(private ReportService: ReportService) { }

  ngOnInit(): void {
    this.ReportService.getActiveProducts().subscribe(data => {
      this.activeProducts = data;
    });
  }
}
