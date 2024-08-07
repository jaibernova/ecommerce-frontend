import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'; 
import { UserService } from '../services/user.service'; 

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  startDate: string = '';
  endDate: string = '';
  userFilter: string = '';
  products: any[] = [];
  productQuantities: { [key: number]: number } = {};
  productDiscounts: { [key: number]: number } = {}; // Para almacenar el precio descontado por unidad
  totalDiscount: number = 0;
  orderTotal: number = 0; // Total de la orden después de descuentos
  currentDate: Date = new Date();
  randomOrder: boolean = false; // Indica si se debe generar un pedido aleatorio

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  calculateDiscounts(): void {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    let discountPercentage = 0;
    console.log(this.userFilter)
    if (this.currentDate >= start && this.currentDate <= end) {
      // Aplica descuento por fecha
      discountPercentage = 10;
    }
console.log(this.userFilter)
    if (this.userFilter) {
      
      this.userService.isFrequentCustomer(this.userFilter).subscribe(isFrequent => {
        if (isFrequent) {
          // Aplica descuento adicional
          discountPercentage += 5;
        }
        if (this.randomOrder) {
          discountPercentage += 50; // Aplica 50% por aleatoriedad
          this.generateRandomQuantities(); // Genera cantidades aleatorias
        }
        this.applyDiscounts(discountPercentage);
      });
    } else {
      if (this.randomOrder) {
        discountPercentage += 50; // APlica el descuento del 50%
        this.generateRandomQuantities(); // Genera cantidades aleatorias
      }
      this.applyDiscounts(discountPercentage);
    }
  }

  generateRandomQuantities(): void {
    this.products.forEach(product => {
      const maxQuantity = 5; // Maxima cantidad aleatoria
      const randomQuantity = Math.floor(Math.random() * maxQuantity) + 1;
      this.productQuantities[product.id] = randomQuantity;
    });
  }

  applyDiscounts(discountPercentage: number): void {
    this.totalDiscount = 0;
    this.orderTotal = 0; // Reinicia el total
    
    this.products.forEach(product => {
      const quantity = this.productQuantities[product.id] || 0;
      const originalPrice = product.price;
      
      // Calcula el descuento del producto
      const totalPrice = originalPrice * quantity;
      const discount = totalPrice * (discountPercentage / 100);
      const discountedPrice = totalPrice - discount;

      this.productDiscounts[product.id] = discountedPrice / quantity; // Guarda precio por unidad
      this.totalDiscount += discount;
      this.orderTotal += discountedPrice; // Actualiza el monto total
    });
  }

  calculateDiscountedPrice(product: any): number {
    const quantity = this.productQuantities[product.id] || 0;
    const discountedPricePerUnit = this.productDiscounts[product.id] || product.price;
    return discountedPricePerUnit * quantity; // Usa descuento por unidad
  }

  submitOrder(): void {
    const orderItems = this.products.map(product => ({
      productId: product.id,
      quantity: this.productQuantities[product.id] || 0
    })).filter(item => item.quantity > 0);
  
    this.userService.getUserId(this.userFilter).subscribe(userId => {
      if (userId) {
        const orderRequest = {
          orderDate: new Date().toISOString(),
          status: 'PENDING',
          userId: userId, // Aquí usamos el ID del usuario obtenido
          items: orderItems
        };
  
        // Enviar la orden al backend
        this.productService.submitOrder(orderRequest).subscribe(response => {
          console.log('Order submitted successfully:', response);
          // Manejar la respuesta del backend
        }, (error: any) => {
          console.error('Error submitting order:', error);
          // Manejar el error
        });
      } else {
        console.error('User not found');
        // Manejar el caso en que el usuario no se encuentre
      }
    });
  }
}
