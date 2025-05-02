import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DniComponent } from './contactos/dni/dni.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ContactosComponent,
    ProductDetailComponent,
    DniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
