import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EjemploContenidoUnoComponent } from './clase11/mi-vista/ejemplo-contenido-uno/ejemplo-contenido-uno.component';
import { EjemploContenidoDosComponent } from './clase11/mi-vista/ejemplo-contenido-dos/ejemplo-contenido-dos.component';
import { MiVistaComponent } from './clase11/mi-vista/mi-vista.component';

const rutas: Routes = [
  {path: 'mi-vista', component: MiVistaComponent },
  {path: 'mi-vista/:parametro', component: MiVistaComponent }   
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule      
  ]
})
export class RoutingModule { }
