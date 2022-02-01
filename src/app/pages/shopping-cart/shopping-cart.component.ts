import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  imageURL =
    'https://mpng.subpng.com/20180810/el/kisspng-angularjs-computer-icons-javascript-vector-graphic-go-to-image-page-5b6d2612bd34c9.534035491533879826775.jpg';
  productsTitle: String = 'Products';
  orderTitle: String = 'Order';
  isDisplayCartScreen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  /**
   * @param: none
   * @return: void
   * Update the add to cart button status on click event
   */
  addToCartBtnClickEvent(): void {
    this.isDisplayCartScreen = !this.isDisplayCartScreen;
  }
}
