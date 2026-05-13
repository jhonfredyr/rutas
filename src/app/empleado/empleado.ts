import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-empleado',
  imports: [FormsModule,CommonModule],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css',
})
export class Empleado {
 nombre:string='';
  documento:string='';
  empleado:string='';
  salario:string='';

  listaempleado: any[]=[]

  guardar(){
    const empleado={
      nombre:this.nombre,
      documento:this.documento,
      empleado:this.empleado,
      salario:this.salario
    }
    this.listaempleado.push(empleado)
    console.log(this.listaempleado);
    
  }
} 