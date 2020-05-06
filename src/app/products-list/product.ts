import { Image } from './image';

export interface Product {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    rating: number;
    image: Image;
}