import { ProductItem } from "./product-item";

export class Product {
    category: string;
    categoryList : ProductItem[];

    constructor(categoryName = '', productItem = []) {
        this.category = categoryName
        this.categoryList = productItem
    }
}