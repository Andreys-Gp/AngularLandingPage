import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProducto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Base URL for the API
  private baseURL: string = 'https://fakestoreapi.com/products';


  constructor(private _httpclient: HttpClient) { }

  public getAllProducts(sort?: string): Observable<IProducto[]> {
    const sortParam = sort ? `?sort=${sort}` : '';
    return this._httpclient.get<IProducto[]>(`${this.baseURL}${sortParam}`);
    //return this._httpclient.get<IProducto[]>(this.baseURL);
  }

  public getProduct(id: number  ): Observable<IProducto> {
    return this._httpclient.get<IProducto>(`${this.baseURL}/${id}`);
  }
  public getAllCategories(): Observable<Category[]> {
    return this._httpclient.get<Category[]>(`${this.baseURL}/categories`);
  }
  public newProduct(product: IProducto): Observable<IProducto> {
    return this._httpclient.post<IProducto>(this.baseURL, product);
  }
  public updateProduct(id: number , product: IProducto): Observable<IProducto> {
    return this._httpclient.put<IProducto>(`${this.baseURL}/${id}`, product);
  }
  public deleteProduct(id: number ): Observable<IProducto> {
    return this._httpclient.delete<IProducto>(`${this.baseURL}/${id}`);
  }


}
