import { Routes } from '@angular/router';
import { CitaMedica } from './cita-medica/cita-medica';
import { Cliente } from './cliente/cliente';
import { Contacto } from './contacto/contacto';
import { Empleado } from './empleado/empleado';
import { ForEstudiante } from './for-estudiante/for-estudiante';
import { Usuario } from './usuario/usuario';
import { Libro } from './libro/libro';
import { Mascota } from './mascota/mascota';
import { pedido } from './pedido/pedido';
import { Producto } from './producto/producto';

    export const routes: Routes = [
    {path:'cita-medica',component:CitaMedica},
    {path:'cliente',component:Cliente},
    {path:'contacto',component:Contacto},
    {path:'empleado',component:Empleado},
    {path:'for-estudiante',component:ForEstudiante},
    {path:'usuario',component:Usuario},
    {path:'libro',component:Libro},
    {path:'mascota',component:Mascota},
    {path:'pedido',component:pedido},
    {path:'producto',component:Producto}

];