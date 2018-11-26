import { Component, OnInit } from '@angular/core';
import { IAlumno } from 'src/app/models/alumnos.models';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-alumnos',
  templateUrl: './nuevo-alumnos.component.html',
  styleUrls: ['./nuevo-alumnos.component.css']
})
export class NuevoAlumnosComponent implements OnInit {

  alumno: IAlumno = {}; 
  titulo: string;

  constructor(private alumnosService: AlumnosService, private ruteador: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = this.rutaActiva.snapshot.queryParamMap.get("tit");
  }

  agregar() {
    this.alumnosService.insertar(this.alumno)
      .subscribe(
        respuesta => this.ruteador.navigate(["alumnos"])
      )
  }

}
