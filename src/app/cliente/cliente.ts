import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cliente',
  imports: [FormsModule,CommonModule],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente {
nombre:string='';
cedula:string='';
direccion:string='';
telefono:string='';
listacliente:any[]=[];
  guardar(){
    const cliente={
      nombre:this.nombre,
      cedula:this.cedula,
      direccion:this.direccion,
      telefono:this.telefono
    }
    this.listacliente.push(cliente);
    console.log(this.listacliente);
    
  }
}

