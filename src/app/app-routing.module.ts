import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { SuccessComponent } from './components/success/success.component';
import { ProductDetailsComponent } from './components/shopping-cart/product-details/product-details.component';
import { AboutComponent } from './components/about/about.component';
const routes: Routes = [
  { path:'', redirectTo:'/register',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingCartComponent },
  {path: 'success', component: PlaceorderComponent},
  {path: 'order', component: SuccessComponent},
  {path: 'about', component: AboutComponent},
  {path:'products/:productId', component: ProductDetailsComponent},
  { path: '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
