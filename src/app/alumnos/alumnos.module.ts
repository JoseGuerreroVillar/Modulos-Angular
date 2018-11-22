import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { NuevoAlumnosComponent } from './nuevo-alumnos/nuevo-alumnos.component';

@NgModule({
  declarations: [ListadoAlumnosComponent, NuevoAlumnosComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    FormsModule
  ],
  exports: [AlumnosRoutingModule]
})

export class AlumnosModule { }
