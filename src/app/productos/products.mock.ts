
export const productslist:Product[] = [
  {id:1, name:'Lavandina', price:10,desciption:'bootella de un litro'},
  {id:2, name:'Jabon', price:20,desciption:'barra de jabon'},
  {id:3, name:'Detergente', price:30,desciption:'botella de un litro'},
  {id:4, name:'Suavizante', price:40,desciption:'botella de un litro'},
  {id:5, name:'Desinfectante', price:50,desciption:'botella de un litro'},
  {id:6, name:'Limpiador', price:60,desciption:'botella de un litro'},
  {id:7, name:'Desengrasante', price:70,desciption:'botella de un litro'},
  {id:8, name:'Desinfectante', price:80,desciption:'botella de un litro'},
  {id:9, name:'Limpiador', price:90,desciption:'botella de un litro'},
  {id:10, name:'Desengrasante', price:100},
]

export interface Product {
  id:number | string;
  name:string;
  price:number;
  desciption?:string;
}
