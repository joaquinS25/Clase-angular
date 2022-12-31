import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Interpolacio-y-directivas';

  constructor(private router: Router) {

  }

  public irAMiVista(): void {
    this.router.navigate(
      ['mi-vista', { alumno: 'juan', calificacion: 15 }],
      {state: {data: [{nombre: 'Pedro', calificacion: 20}]}}
      );
  }
}
