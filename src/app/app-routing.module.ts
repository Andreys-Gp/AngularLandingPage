import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductosComponent},
  {path: 'products/:productId', component: ProductDetailComponent},
  {path: 'contact', component: ContactosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
