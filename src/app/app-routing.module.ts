import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductFullViewComponent } from './pages/product-full-view/product-full-view.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductFullViewComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
