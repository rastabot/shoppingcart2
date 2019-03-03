import { Injectable } from '@angular/core';
import { Product } from './one-product-detail';
import { LIST_OF_PRODUCTS } from './list-of-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  getProducts(): Observable<Product[]>{
    return of(LIST_OF_PRODUCTS);
  }

  getProduct(id:number):Observable<Product>{
    return of(LIST_OF_PRODUCTS.find(product=> product.product_id === id));
  }

  constructor() { }
}
