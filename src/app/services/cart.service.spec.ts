import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService]
    });
    service = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('able to post cartdetail from the API via Post', waitForAsync(() => {
    const dummyPostResponse: any = {
      "message": "Request submitted successfully",
    };

    service.sendCartDetails({}).subscribe(users => {
      expect(users).toEqual(dummyPostResponse);
    });

    const req = httpMock.expectOne(`${service.cartUrl}`);
    expect(req.request.method).toBe("POST");
    req.flush(dummyPostResponse);
  }));
});
