import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {}

  /**
   * @param: update the quantity item of product item
   * @return: void
   * Update the messenger service object
   */
  addRemoveQuantity(newItem: any): void {
    this.msg.updateObjData(newItem);
  }
}
