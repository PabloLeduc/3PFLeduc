import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface Product {
  createdAt: Date;
  name: string; 
  description: string;
  id: string;
}

export interface IProductsService {
  products$: Observable<Product[]>;
  loadProducts(): void;
  createProduct(data: Pick<Product, 'description' | 'name'>): void;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosServicesService {
  private readonly baseUrl = 'https://63c54104e1292e5bea1eae2c.mockapi.io';
  private products =  new BehaviorSubject<Product[]>([])
  public products$: Observable<Product[]>;
  constructor(private httpClient: HttpClient) { 
    this.products$ = this.products.asObservable();
  }

  loadProducts(){
    this.httpClient.get<Product[]>(`${this.baseUrl}/products`).subscribe((apiProducts) => {
      this.products.next(apiProducts)
    })
  }

}
