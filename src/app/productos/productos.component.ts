import { IProducto } from './../models/product.model';
import { productslist } from './products.mock';
import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service'; // Ensure correct path

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productslist: any[] = [];
  constructor(private readonly _apiService: ApiService) {

  }

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProducto[]) => {
      this.productslist = data;
     // console.log(this.productslist);
    });
  }



}
