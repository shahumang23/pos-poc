import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-quantity-btn',
  templateUrl: './product-quantity-btn.component.html',
  styleUrls: ['./product-quantity-btn.component.scss']
})
export class ProductQuantityBtnComponent implements OnInit {
  @Input() productId:any;
  @Input() quantity:any;
  constructor() { }
  @Output() newItemEvent = new EventEmitter<any>();
  
  ngOnInit(): void {
  }

  addQuantity():void {
    this.quantity = this.quantity + 1;
    this.newItemEvent.emit({'qty' : this.quantity, 'productId' : this.productId});
  }

  removeQuantity():void {
    if(this.quantity != 0) {
      this.quantity = this.quantity -1;
      this.newItemEvent.emit({'qty' : this.quantity, 'productId' : this.productId});
    }
  }

}
