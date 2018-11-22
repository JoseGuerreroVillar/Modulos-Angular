import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PrincipalRoutingModule } from './principal-routing-module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ],
  exports: [PrincipalRoutingModule]
})
export class PrincipalModule { }
