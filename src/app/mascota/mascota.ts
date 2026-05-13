import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mascota',
  imports: [FormsModule,CommonModule],
  templateUrl: './mascota.html',
  styleUrl: './mascota.css',
})
export class Mascota {
  nombre_mascota:string='';
  tipo:string='';
  edad:string='';
  nombre_dueño:string='';

  listaMascota:any[]=[]
  guaardar(){
    const mascota={
      nombre_mascota:this.nombre_mascota,
      tipo:this.tipo,
      edad:this.edad,
      nombre_dueño:this.nombre_dueño
    }
    this.listaMascota.push(mascota);
    console.log(this.listaMascota);
    
  }
}