import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Router } from '@angular/router';
import { IAlumno } from 'src/app/models/alumnos.models';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  listaAlumnos: IAlumno[];

  constructor(private alumnosService: AlumnosService, private ruteador: Router) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.alumnosService.listar()
      .subscribe(
        (datos: IAlumno[]) => {
          console.table(datos);
          this.listaAlumnos = datos
        }
      );
  }

  nuevo() {
    this.ruteador.navigate(["alumnos","nuevo"], {
      queryParams: { tit: "Nuevo Alumno" }
    })
  }

}
