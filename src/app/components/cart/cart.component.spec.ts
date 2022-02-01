import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CartComponent } from './cart.component';
import { CartService } from 'src/app/services/cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartServiceSpy: { sendCartDetails: { and: { returnValue: (arg0: any) => void; }; }; };

  beforeEach(async () => {

    cartServiceSpy =jasmine.createSpyObj('CartService', ['sendCartDetails']);
    cartServiceSpy.sendCartDetails.and.returnValue(of({
      "message": "Request was submitted"
    }));

    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        { provide: CartService, useValue: cartServiceSpy }],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    component.payCartAmount();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
