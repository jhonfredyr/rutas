import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-producto',
  imports: [FormsModule,CommonModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  nombre:string='';
  precio:string='';
  cantidad:string='';
  categoria:string='';

  ListaProducto:any[]=[]
  guardar(){
    const productos={
      nombre:this.nombre,
      precio:this.precio,
      cantidad:this.cantidad,
      categoria:this.categoria
    }
    this.ListaProducto.push(productos)
    console.log(this.ListaProducto);
    
  }
}