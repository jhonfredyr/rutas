import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pedido',
  imports: [FormsModule,CommonModule],
  templateUrl: './pedido.html',
  styleUrl: './pedido.css',
})
export class pedido {
  cliente:string='';
  producto:string='';
  cantidad:string='';
  direccion_entrega:string='';

  listaPedido:any[]=[]

  guardar(){
    const pedidos={
      cliente:this.cliente,
      producto:this.producto,
      cantidad:this.cantidad,
      direccion_entrega:this.direccion_entrega,
    }
    this.listaPedido.push(pedidos);
    console.log(this.listaPedido);
    
  }
}