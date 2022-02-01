import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { MessengerService } from 'src/app/services/messenger.service';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let messengerServiceSpy: MessengerService;

  beforeEach(async () => {
    messengerServiceSpy = jasmine.createSpyObj('MessengerService', [
      'updateObjData'
    ]);
    await TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      providers: [{ provide: MessengerService, useValue: messengerServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.cartItem = {
      id: 1,
      name: 'Veggie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra velit erat. Praesent consequat nec ipsum non volutpat. Morbi vel ex auctor, porttitor felis in, accumsan urna. Duis hendrerit est ut ligula consequat vestibulum. Pellentesque ultrices semper nunc eu mattis. Sed vehicula leo sit amet mi tincidunt, sit amet interdum nulla sollicitudin',
      imageUrl:
        'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/menu/products/mcdonalds-Vegetable-Deluxe.jpg?$Category_Desktop$',
      price: 4.99,
      qty: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addRemoveQuantity method', () => {
    component.addRemoveQuantity({});
    expect(messengerServiceSpy.updateObjData).toHaveBeenCalled();
  });

});
