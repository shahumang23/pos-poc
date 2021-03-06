import { getTestBed, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    injector = getTestBed();
    service = injector.get(ProductService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve product list from the API via GET', waitForAsync(() => {
    const dummyGetResponse: any = [{
      "category": "Burgers",
      "categoryList": [{
          "id": 1,
          "name": "Veggie",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra velit erat. Praesent consequat nec ipsum non volutpat. Morbi vel ex auctor, porttitor felis in, accumsan urna. Duis hendrerit est ut ligula consequat vestibulum. Pellentesque ultrices semper nunc eu mattis. Sed vehicula leo sit amet mi tincidunt, sit amet interdum nulla sollicitudin",
          "imageUrl": "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/menu/products/mcdonalds-Vegetable-Deluxe.jpg?$Category_Desktop$",
          "price": 4.99
        },
        {
          "id": 2,
          "name": "BBQ Bacon stack",
          "description": "Praesent dictum laoreet nibh nec volutpat. Etiam vel arcu lectus. Maecenas tellus eros, euismod a urna eget, interdum posuere dolor. Vivamus eleifend convallis nisi vel blandit. Praesent sed tellus vitae dui viverra faucibus porttitor ut dui. Praesent id metus ut augue tincidunt porttitor ut ac nisl. Etiam ac porttitor massa,",
          "imageUrl": "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/menu/products/mcdonalds-BBQBaconStack.jpg?$Category_Desktop$",
          "price": 5.99
        },
        {
          "id": 3,
          "name": "Mayo Chicken",
          "description": "In hac habitasse platea dictumst. Integer volutpat fringilla elit, sit amet molestie neque volutpat a. Ut quis ligula libero. Suspendisse justo ipsum, efficitur non lobortis sed",
          "imageUrl": "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/menu/products/mcdonalds-Mayo-Chicken.jpg?$Category_Desktop$",
          "price": 6.99
        },
        {
          "id": 4,
          "name": "Vegge Plant",
          "description": "Suspendisse in urna purus. Ut et velit pharetra, ullamcorper augue eu, venenatis purus. Proin elementum arcu porttitor ipsum laoreet, sed ullamcorper nibh iaculis. Vestibulum sollicitudin, turpis sit amet tempor elementum, lorem ex volutpat ante, quis auctor leo urna quis sem. Cras est purus, vehicula ut augue vel, pretium placerat eros. Nam et faucibus tortor. Curabitur pretium euismod felis, nec luctus enim tincidunt eget. Phasellus nunc turpis",
          "imageUrl": "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/menu/products/mcdonalds-mcplant-v1.jpg?$Category_Desktop$",
          "price": 2.99
        },
        {
          "id": 5,
          "name": "Cheese burger",
          "description": "In aliquet aliquam dictum. Curabitur a neque enim. Duis tincidunt metus vitae arcu pretium, eu rhoncus urna venenatis. Etiam eu est pharetra, auctor lorem a, finibus felis. Vestibulum convallis auctor magna nec posuere. Proin velit augue, rhoncus vulputate convallis vitae, lobortis vel justo. Maecenas lectus ligula,",
          "imageUrl": "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/menu/products/mcdonalds-Double-Cheeseburger.jpg?$Category_Desktop$",
          "price": 3.99
        }
      ]
    }];

    service.getProducts().subscribe(users => {
      expect(users).toEqual(dummyGetResponse);
    });

    const req = httpMock.expectOne(`${service.productsUrl}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyGetResponse);
  }));
});
