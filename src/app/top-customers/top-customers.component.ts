import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-top-customers',
  templateUrl: './top-customers.component.html',
  styleUrls: ['./top-customers.component.css']
})
export class TopCustomersComponent implements OnInit {
  topCustomers: any[] = [];

  constructor(private userService: ReportService) { }

  ngOnInit(): void {
    this.userService.getTopCustomers().subscribe(data => {
      this.topCustomers = data;
    });
  }
}
