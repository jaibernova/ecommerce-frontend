import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchComponent } from './search/search.component';

import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { TopSoldProductsComponent } from './top-sold-products/top-sold-products.component';
import { TopCustomersComponent } from './top-customers/top-customers.component';
import { ActiveProductsComponent } from './active-products/active-products.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    UserListComponent,
    SearchComponent,
    TopSoldProductsComponent,
    TopCustomersComponent,
    ActiveProductsComponent,
    HeaderComponent,
    FooterComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule, 
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule
  ],
  providers: [
  AuthService,
  ProductService,
  UserService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
