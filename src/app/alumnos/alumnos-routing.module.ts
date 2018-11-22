import { NgModule } from "@angular/core";
import { ListadoAlumnosComponent } from "./listado-alumnos/listado-alumnos.component";
import { RouterModule, Route } from "@angular/router";

const rutas: Route[] = [
    {path: "", component: ListadoAlumnosComponent}
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