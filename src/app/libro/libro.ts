import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-libro',
  imports: [FormsModule,CommonModule],
  templateUrl: './libro.html',
  styleUrl: './libro.css',
})
export class Libro {
  titulo:string='';
  autor:string='';
  anio:string='';
  editorial:string='';

  listaLibro:any[]=[];
  guardar(){
    const libro={
      titulo:this.titulo,
      autor:this.autor,
      anio:this.anio,
      editorial:this.editorial
    }
    this.listaLibro.push(libro);
    console.log(this.listaLibro);
    
  }
}