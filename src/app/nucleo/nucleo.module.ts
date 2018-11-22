import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NucleoRoutingModule } from './nucleo-routing.modules';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [LoginComponent, CabeceraComponent],
  imports: [
    CommonModule,
    NucleoRoutingModule
  ],
  exports: [
    NucleoRoutingModule,
    CabeceraComponent
  ]
})

export class NucleoModule { }
