import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  public theObjData: BehaviorSubject<Array<any>> = new BehaviorSubject<
    Array<any>
  >([]);

  constructor() {}

  public SetObjData(newValue: any): void {
    let tempVal = this.theObjData.getValue();
    newValue = [...tempVal, { ...newValue, qty: 1 }];
    this.theObjData.next(newValue);
  }

  public updateObjData(updateValue: any): void {
    this.theObjData.next(
      this.theObjData.value
        .map((obj) => {
          {
            if (obj.id === updateValue.productId && updateValue.qty === 0) {
              return undefined;
            }
            if (obj.id === updateValue.productId) {
              return { ...obj, qty: updateValue.qty };
            }
            return obj;
          }
        })
        .filter((x) => typeof x !== 'undefined')
    );
  }
}
