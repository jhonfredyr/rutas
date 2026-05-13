import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contacto',
  imports: [FormsModule,CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
 nombre:string='';
  correo:string='';
  asunto:string='';
  mensaje:string='';
  listacontacto:any[]=[];
  guardar(){
    const contacto={
      nombre:this.nombre,
      correo:this.correo,
      asunto:this.asunto,
      mensaje:this.mensaje
    }
    this.listacontacto.push(contacto)
    console.log(this.listacontacto);
    
  }
}

