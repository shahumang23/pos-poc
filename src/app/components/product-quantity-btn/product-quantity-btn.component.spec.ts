import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityBtnComponent } from './product-quantity-btn.component';

describe('ProductQuantityBtnComponent', () => {
  let component: ProductQuantityBtnComponent;
  let fixture: ComponentFixture<ProductQuantityBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductQuantityBtnComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQuantityBtnComponent);
    component = fixture.componentInstance;
    component.quantity = 1;
    component.productId = 2;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should addQuantity call', () => {
    component.newItemEvent.subscribe((selectedHero) => expect(selectedHero).toEqual({'qty' : 2, 'productId' : 2}));
    component.addQuantity();
  });

  it('should removeQuantity call', () => {
    component.newItemEvent.subscribe((selectedHero) => expect(selectedHero).toEqual({'qty' : 0, 'productId' : 2}));
    component.removeQuantity();
  });
});
