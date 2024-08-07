import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service'; // Asegúrate de tener un servicio para manejar órdenes
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: any[] = []; // Cambia el tipo según tu modelo de datos

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    }, error => {
      console.error('Error fetching orders', error);
    });
  }

  deleteOrder(orderId: number): void {
      this.orderService.deleteOrder(orderId).subscribe(() => {
        // Remove the deleted order from the local list
        this.loadOrders();
      }, error => {
        console.error('Error deleting order', error);
        alert('Failed to delete the order');
      });

  }
}
