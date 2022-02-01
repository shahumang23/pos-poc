import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItem } from 'src/app/models/product-item';
import { MessengerService } from 'src/app/services/messenger.service';

import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let messengerServiceSpy: MessengerService;

  beforeEach(async () => {
    messengerServiceSpy =jasmine.createSpyObj('MessengerService', ['SetObjData']);
    await TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ],
      providers: [
        {provide: MessengerService, useValue: messengerServiceSpy}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.productItem = new ProductItem(5, 'Test Name', 'Test', 3.99, 'https://www.google.com', true );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleAddToCart method', () => {
    component.handleAddToCart();
    expect(messengerServiceSpy.SetObjData).toHaveBeenCalled();
  });
});
