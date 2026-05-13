import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { form } from '@angular/forms/signals';
@Component({
  selector: 'app-usuario',
  imports: [FormsModule,CommonModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
nombre:string='';
apellido:string='';
correo:string='';
telefono:string='';

listaUsuario:any[]=[];

guardar(){

const usuario={
nombre:this.nombre,
apellido:this.apellido,
correo:this.correo,
telefono:this.telefono
}
    this.listaUsuario.push(usuario);
    console.log(this.listaUsuario);
    
  }}
