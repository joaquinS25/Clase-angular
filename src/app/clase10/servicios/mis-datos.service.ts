import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, of, Subject, take } from 'rxjs';
import { Alumno } from 'src/app/clase5/alumno';

@Injectable({
  providedIn: 'root'
})
export class MisDatosService {

  public usuarios$: Observable<any[]>;
  private usuarios: Subject<any[]>;

  constructor(
    private httpClient: HttpClient
  ) { 

    this.usuarios = new Subject();
    this.usuarios$ = this.usuarios.asObservable();
    this.getusuarios().subscribe(Response => {
      this.usuarios.next(Response.data);
    });
  }

public getAlumno(): Observable<Alumno[]> {
  return of([
    {nombre: 'Juan', calificacion: 15}
  ]);
}

public getFecha(): Observable<Date> {
  return interval(1000).pipe(map(_ => new Date()));
}

public getusuarios(): Observable<any>{
  return this.httpClient.get(
    'https://reqres.in/api/users?page=2'
  );
}


public addUsuarios(usuario: any): void {
  this.usuarios.next(usuario);     
}
 
}
  