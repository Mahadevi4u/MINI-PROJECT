import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';

import { ProductsComponent } from './components/shopping-cart/products/products.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/products/product-item/product-item.component';
import { Product } from './models/product';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/success/success.component';
import { ProductDetailsComponent } from './components/shopping-cart/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ShoppingCartComponent,
    CartComponent,
    ProductsComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PlaceorderComponent,
    SuccessComponent,
    ProductDetailsComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot([
      {path: '', component:ProductItemComponent},
      {path: 'products/:productId', component:ProductDetailsComponent},
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
