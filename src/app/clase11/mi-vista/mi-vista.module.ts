import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiVistaComponent } from './mi-vista.component';
import { EjemploContenidoUnoComponent } from './ejemplo-contenido-uno/ejemplo-contenido-uno.component';
import { EjemploContenidoDosComponent } from './ejemplo-contenido-dos/ejemplo-contenido-dos.component';
import { MiVistaRoutingModule } from '../mi-vista-routing.module';



@NgModule({
  declarations: [
    MiVistaComponent,
    EjemploContenidoUnoComponent,
    EjemploContenidoDosComponent
  ],  
  imports: [ 
    CommonModule,
    MiVistaRoutingModule
  ]
})
export class MiVistaModule { }
