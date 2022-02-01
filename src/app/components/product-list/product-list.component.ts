import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList: Product[] = [];
  private getProductListSubscription!: Subscription;
  isError: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductsList();
  }

  /**
   * @param: none
   * @return: void
   * Get the product item details
   */
  loadProductsList(): void {
    this.getProductListSubscription = this.productService
      .getProducts()
      .subscribe(
        (response) => {
          this.productList = response;
        },
        (error) => {
          this.isError = true;
        }
      );
  }

  // unsubscribe to avoid memory leaks
  ngOnDestroy() {
    if (this.getProductListSubscription) {
      this.getProductListSubscription.unsubscribe();
    }
  }
}
