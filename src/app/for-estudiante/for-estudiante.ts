import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-for-estudiante',
  imports: [FormsModule,CommonModule],
  templateUrl: './for-estudiante.html',
  styleUrl: './for-estudiante.css',
})
export class ForEstudiante {
  nombre:string='';
  edad:string='';
  programa:string='';
  semestre:string='';

  listaestudiante:any []=[];

  guardar(){
    const estudiante={
      nombre:this.nombre,
      edad:this.edad,
      programa:this.programa,
      semestre:this.semestre
    }
    this.listaestudiante.push(estudiante);
    console.log(this.listaestudiante);
    
  }

}