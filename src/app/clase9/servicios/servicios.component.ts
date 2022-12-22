import { Component, Inject, OnInit } from '@angular/core';
import { APIURL } from 'src/app/app.module';
import { MiServicioService } from './mi-servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{
  constructor(
    private servicio: MiServicioService,
    @Inject(APIURL) private api: string
  ){
    
  }

  ngOnInit(): void {
   console.log('Servicios: '+this.servicio.obtenerAlumno()); 
   console.log(this.api);     
   console.log(1); 
   this.servicio.obtenerPersonajes().subscribe((valores) =>{
    console.log(valores);   
   });

   /*this.servicio.obtenerPersonajes().subscribe({
    next: () => {},
    error: () => {},
    complete: () => {}
   });*/
  }

  click(){
    this.servicio.contador = this.servicio.contador +1;
  }
}
   