import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EjemploContenidoUnoComponent } from './mi-vista/ejemplo-contenido-uno/ejemplo-contenido-uno.component';
import { EjemploContenidoDosComponent } from './mi-vista/ejemplo-contenido-dos/ejemplo-contenido-dos.component';
import { MiVistaComponent } from './mi-vista/mi-vista.component';

const rutas: Routes = [
  {path: '', component: MiVistaComponent, children: [
      { path: 'uno', component: EjemploContenidoUnoComponent },
      { path: 'dos', component: EjemploContenidoDosComponent }
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class MiVistaRoutingModule { }
