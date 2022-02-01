import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: ProductItem;

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {}

  /**
   * @param: none
   * @return: void
   * set the selected product item to the cart object via messenger service
   */
  handleAddToCart(): void {
    this.productItem.isAddedIntoCart = true;
    this.msg.SetObjData(this.productItem);
  }
}
