import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cita-medica',
  imports: [FormsModule,CommonModule],
  templateUrl: './cita-medica.html',
  styleUrl: './cita-medica.css',
})
export class CitaMedica {
 nombre_paciente:string='';
 documento:string='';
 fecha:string='';
 hora:string='';
 expecialidad:string=''
 listamedica:any[]=[];
 Guardar(){
  const citas={
    nombre_paciente:this.nombre_paciente,
    documento:this.documento,
    fecha:this.fecha,
    hora:this.hora,
    expecialidad:this.expecialidad
  }
  this.listamedica.push(citas);
  console.log(this.listamedica);
  
 }
}
