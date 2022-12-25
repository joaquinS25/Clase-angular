import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { MisDatosService } from '../../servicios/mis-datos.service';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit, OnDestroy {

  public fecha = new Date();
  public fechaObservable: Observable<Date>;
  public usuarios: any[];
  private subscripcion: Subscription;

  constructor(
    public servicio: MisDatosService
  ) { }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.servicio.getAlumno().subscribe(valores => {
      console.log(valores);
    });

    this.subscripcion = this.servicio.getFecha().subscribe(valor => {
      console.log("Metodo next ejecutando")
      this.fecha = valor;
    });

    this.fechaObservable = this.servicio.getFecha();

    this.servicio.usuarios$.subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }
}
