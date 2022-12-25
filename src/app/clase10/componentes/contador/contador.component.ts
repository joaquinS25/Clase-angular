import { Component, OnInit } from '@angular/core';
import { MisDatosService } from '../../servicios/mis-datos.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit{

  public contador = 0;
  
  constructor(
    private misDatos: MisDatosService
  ){}

  ngOnInit(): void {
    this.misDatos.getFecha().subscribe(_ => {
      this.contador++;
    });
  }


  cambiarLista(){
    this.misDatos.addUsuarios([{id: '1000', email: 'email2@gmail.com'}]);  
  }
}
