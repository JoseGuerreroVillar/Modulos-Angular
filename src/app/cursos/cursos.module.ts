import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [ListadoCursosComponent],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  exports: [CursosRoutingModule]
})
export class CursosModule { }
