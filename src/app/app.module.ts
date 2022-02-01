import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductQuantityBtnComponent } from './components/product-quantity-btn/product-quantity-btn.component';
import { CategoryHeaderComponent } from './components/category-header/category-header.component';
import { InnerHeaderComponent } from './components/inner-header/inner-header.component';
import { CustomModelComponent } from './components/custom-model/custom-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    CartItemComponent,
    ProductQuantityBtnComponent,
    CategoryHeaderComponent,
    InnerHeaderComponent,
    CustomModelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
