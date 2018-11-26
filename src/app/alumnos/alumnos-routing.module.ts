import { NgModule } from "@angular/core";
import { ListadoAlumnosComponent } from "./listado-alumnos/listado-alumnos.component";
import { RouterModule, Route } from "@angular/router";
import { NuevoAlumnosComponent } from "./nuevo-alumnos/nuevo-alumnos.component";
import { AlumnosService } from "../services/alumnos.service";

const rutas: Route[] = [
    {path: "", component: ListadoAlumnosComponent, children: [
        {path: "nuevo", component: NuevoAlumnosComponent}
    ]},
    
]

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forChild(rutas)
    ],
    exports: [RouterModule]
})

export class AlumnosRoutingModule {}