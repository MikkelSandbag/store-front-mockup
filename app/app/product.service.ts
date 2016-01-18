import {PRODUCTS} from './mock-products';
import {Product} from './product';
import {Injectable} from 'angular2/core';

@Injectable()
export class ProductService {
	getProducts() {
		return Promise.resolve(PRODUCTS);
	}

	getProductsSlowly() {
		return new Promise<Product[]>(resolve =>
			setTimeout(() => resolve(PRODUCTS), 10000) //10 seonds
		);
	}
}