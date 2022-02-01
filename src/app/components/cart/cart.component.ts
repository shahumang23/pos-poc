import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CustomModelService } from 'src/app/services/custom-model.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any = [];
  cartTotal = 0;

  private submitCartDetail!: Subscription;
  private selectedCartSubscription!: Subscription;
  
  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private modalService: CustomModelService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.handleSubscription();
  }

  /**
   * @param: none
   * @return: void
   * Subscribe the selected product items
   */
  handleSubscription(): void {
    this.selectedCartSubscription = this.msg.theObjData.subscribe((product) => {
      this.cartItems = product;
      this.calcCartTotal();
    });
  }

  /**
   * @param: none
   * @return: void
   * Calculate the total cart amounts
   */
  calcCartTotal(): void {
    this.cartTotal = 0;
    this.cartItems.forEach((item: { qty: number; price: number }) => {
      this.cartTotal += item.qty * item.price;
    });
  }

  /**
   * @param: none
   * @return: void
   * Pay button will proceed the selected cart details
   */
  payCartAmount(): void {
    this.submitCartDetailRequest();
  }

  /**
   * @param: none
   * @return: void
   * Post the submit cart Detail and will return the response from web service
   */
  submitCartDetailRequest(): void {
    this.submitCartDetail = this.cartService
      .sendCartDetails(this.cartItems)
      .subscribe(
        (response) => {
          this.modalService.setRootViewContainerRef(this.viewContainerRef);
          this.modalService.addDynamicComponent('Success', "Your order are submitted successfully");
        },
        (error) => {
          this.modalService.setRootViewContainerRef(this.viewContainerRef);
          this.modalService.addDynamicComponent('Error', "Please try again");
        }
      );
  }

  // unsubscribe to avoid memory leaks
  ngOnDestroy() {
    if (this.selectedCartSubscription) {
      this.submitCartDetail.unsubscribe();
      this.selectedCartSubscription.unsubscribe();
    }
  }
}
