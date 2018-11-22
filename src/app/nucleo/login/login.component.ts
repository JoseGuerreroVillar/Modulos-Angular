import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autentificacionService: AutentificacionService, private ruteador: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.autentificacionService.logout();
    });
  }

  ingresar() {
    this.autentificacionService.login()
      .subscribe(
        (estado: boolean) => {
          if (estado) {
            this.autentificacionService.onCambiandoEstado.next(estado);
            localStorage.setItem("usuarioLogueado","si");
            this.ruteador.navigate(["home"]);
          }
        }
      )
  }

}
