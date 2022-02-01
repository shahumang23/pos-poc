export class ProductItem {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    isAddedIntoCart: boolean;

    constructor(id = 0, name = '', description = '', price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG', isAddedIntoCart = false) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
        this.isAddedIntoCart = isAddedIntoCart
    }
}
