import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productServiceSpy: { getProducts: { and: { returnValue: (arg0: any) => void; }; }; };

  beforeEach(async(() => {
    productServiceSpy =jasmine.createSpyObj('ProductService', ['getProducts']);
    productServiceSpy.getProducts.and.returnValue(of([{
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
    }]));
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        ProductListComponent
      ],
      providers: [
        {provide: ProductService, useValue: productServiceSpy}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  }));

  it("should call ngOnInit method", fakeAsync(() => {
    component.ngOnInit()
    expect(productServiceSpy.getProducts).toHaveBeenCalled();
  }));

  it("should call loadProductsList method", fakeAsync(() => {
    component.loadProductsList();
    expect(productServiceSpy.getProducts).toHaveBeenCalled();
    flush();
  }));
});
