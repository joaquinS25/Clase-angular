import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolacionComponent } from './clase4/interpolacion/interpolacion.component';
import { MiDirectivaDirective } from './clase4/mi-directiva.directive';
import { MiPipePipe } from './clase4/mi-pipe.pipe';
import { AbueloComponent } from './clase5/abuelo/abuelo.component';
import { HijoUnoComponent } from './clase5/hijo-uno/hijo-uno.component';
import { HijoDosComponent } from './clase5/hijo-dos/hijo-dos.component';
import { NietoUnoComponent } from './clase5/nieto-uno/nieto-uno.component';
import { FormulariosComponent } from './clase6/formularios/formularios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './clase7/material/material.component';
import { MaterialModule } from './modulos/material/material.module';
import { ModalComponent } from './clase7/modal/modal.component';
import { PipesComponent } from './clase8/pipes/pipes.component';
import { MiCustomPipe } from './clase8/pipes/mi-custom.pipe';
import { AlumnoPipe } from './clase8/pipes/alumno.pipe';
import { MiPropiaDirective } from './clase8/directivas/mi-propia.directive';
import { RepetirDirective } from './clase8/directivas/repetir.directive';
import { ServiciosComponent } from './clase9/servicios/servicios.component';
import { ListaAlumnosComponent } from './clase9/servicios/lista-alumnos/lista-alumnos.component';
import { MiServicioService } from './clase9/servicios/mi-servicio.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ObservablesComponent } from './clase10/componentes/observables/observables.component';
import { FechaComponent } from './clase10/componentes/fecha/fecha.component';
import { ContadorComponent } from './clase10/componentes/contador/contador.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing.module';
import { MiVistaModule } from './clase11/mi-vista/mi-vista.module';



export const APIURL = new InjectionToken('APIURL');

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    MiDirectivaDirective,
    MiPipePipe,
    AbueloComponent,
    HijoUnoComponent,
    HijoDosComponent,
    NietoUnoComponent,
    FormulariosComponent,
    MaterialComponent,
    ModalComponent,
    PipesComponent,
    MiCustomPipe,
    AlumnoPipe,
    MiPropiaDirective,
    RepetirDirective,
    ServiciosComponent,
    ListaAlumnosComponent,
    ObservablesComponent,
    FechaComponent,
    ContadorComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,  
    RoutingModule,
    MiVistaModule
  ],
  providers: [
    {provide: APIURL, useValue: 'https://rickandmortyapi.com/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
