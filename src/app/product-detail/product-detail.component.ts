// Removed duplicate import of IProducto
import { Product, productslist } from './../productos/products.mock';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProducto } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //producto?: string;
  color?: string;
  //Product?: Product;
  Product?: IProducto;
  //productslist: Product[] = productslist;
  productslist: IProducto[] = [];
  loading: boolean = true;

    constructor(
      private _route: ActivatedRoute,
      private _apiservice: ApiService
    ){ }

    ngOnInit(): void {
        this._route.params.subscribe({
          next: (params: Params) => {
          this._apiservice.getProduct(Number(params['productId'])).subscribe({
            next: (data: IProducto) => {
              // Handle the product data here
              this.Product = data;
              this.color = (this.Product?.price as number) > 100 ? 'red' : 'green';
              this.loading = false;
            },
            error: (error:any) => {
              console.log(error);
              this.loading = false; // Set loading to false even on error
            }
            
          });
          },
          error: (error:any) => {
            console.log(error);
          }
        });
    }



    




    /* ngOnInit(): void {
        setTimeout(() => {
          this._route.params.subscribe(params => {
            //console.log(params['productId']);
            //this.Product = this.productslist.find(product => product.id == params['productId']);
            //this._apiservice.getProduct(params['produtId']);
            this._apiservice.getProduct(Number(params['productId'])).subscribe((data:IProducto) => {
            this.Product = data;
            this.color = (this.Product?.price as number) > 60 ? 'red' : 'green';
            this.loading = false;
            }); // Closing parenthesis added here
            
        });
        }, 2000);
    } */

}
