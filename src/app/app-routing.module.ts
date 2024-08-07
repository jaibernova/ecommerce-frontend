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
import { AuthGuard } from './guards/auth.guard'; 
import { LogoutComponent } from './logout/logout.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'products/create', component: ProductCreateComponent, canActivate: [AuthGuard] },
  { path: 'products/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'reports/active-products', component: ActiveProductsComponent, canActivate: [AuthGuard] },
  { path: 'reports/top-sold-products', component: TopSoldProductsComponent, canActivate: [AuthGuard] },
  { path: 'reports/top-customers', component: TopCustomersComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'orders/list', component: OrderListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
