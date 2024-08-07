import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchComponent } from './search/search.component';
import { ActiveProductsComponent } from './active-products/active-products.component';
import { TopSoldProductsComponent } from './top-sold-products/top-sold-products.component';
import { TopCustomersComponent } from './top-customers/top-customers.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'users', component: UserListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'reports/active-products', component: ActiveProductsComponent },
  { path: 'reports/top-sold-products', component: TopSoldProductsComponent },
  { path: 'reports/top-customers', component: TopCustomersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
