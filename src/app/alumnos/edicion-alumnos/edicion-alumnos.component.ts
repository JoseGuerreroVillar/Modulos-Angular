import { Component, OnInit } from '@angular/core';
import { IAlumno } from 'src/app/models/alumnos.models';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicion-alumnos',
  templateUrl: './edicion-alumnos.component.html',
  styleUrls: ['./edicion-alumnos.component.css']
})
export class EdicionAlumnosComponent implements OnInit {

  idAlumno: number
  alumno: IAlumno = {}

  constructor(private alumnosService: AlumnosService, private ruteador: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.idAlumno = +this.rutaActiva.snapshot.paramMap.get("idAlumno");

    this.alumnosService.detallar(this.idAlumno)
      .subscribe(
        (registro: IAlumno) => this.alumno = registro
      )
  }

  editar() {
    this.alumnosService.actualizar(this.idAlumno, this.alumno)
      .subscribe (
        () => this.ruteador.navigate(["alumnos"])
      )
  }
}
