import { Injectable } from '@angular/core';
import { IAlumno } from '../models/alumnos.models';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  data: IAlumno[] = [];

  constructor() { }

  listar(): Observable<IAlumno[]> {
    return Observable.create(
      (observador: Observer<IAlumno[]>) => {
        setTimeout(() => {
          observador.next(this.data);
        }, 500);
      }
    )
  }

  insertar(alumnos: IAlumno): Observable<boolean> {
    this.data.push(alumnos);
    return Observable.create(
      (observador: Observer<boolean>) => {
        setTimeout(() => {
          observador.next(true)
        }, 500);
      }
    )
  }

  eliminar(indice: number): Observable<any> {
    this.data.splice(indice, 1);
    return Observable.create(
      (observador: Observer<any>) => {
        setTimeout(() => {
          observador.next(0)
        }, 500);
      } 
    )
  }

  actualizar(indice: number, alumnos: IAlumno): Observable<any> {
    this.data[indice] = alumnos;
    return Observable.create(
      (observable: Observer<any>) => {
        setTimeout(() => {
          observable.next(true)
        }, 500);
      }
    )
  }

  detallar(indice: number): Observable<IAlumno> {
    return Observable.create(
      (observador: Observer<IAlumno>) => {
        setTimeout(() => {
          const item = Object.assign({}, this.data[indice]);
          observador.next(item)
        }, 500);
      }
    )
  }

}
