import { NgModule } from "@angular/core";
import { ListadoAlumnosComponent } from "./listado-alumnos/listado-alumnos.component";
import { RouterModule, Route } from "@angular/router";
import { NuevoAlumnosComponent } from "./nuevo-alumnos/nuevo-alumnos.component";
import { AlumnosService } from "../services/alumnos.service";
import { EdicionAlumnosComponent } from "./edicion-alumnos/edicion-alumnos.component";

const rutas: Route[] = [
    {path: "", component: ListadoAlumnosComponent, children: [
        {path: "nuevo", component: NuevoAlumnosComponent},
        {path: "edicion", component: EdicionAlumnosComponent}
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