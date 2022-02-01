import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() imageUrl: any;
  @Output() addToCartBtnEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  openCartScreen(): void {
    this.addToCartBtnEvent.emit();
  }
}
