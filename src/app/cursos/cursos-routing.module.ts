import { NgModule } from "@angular/core";
import { ListadoCursosComponent } from "./listado-cursos/listado-cursos.component";
import { RouterModule, Route } from "@angular/router";

const rutas: Route[] = [
    {path: "", component: ListadoCursosComponent}
]

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forChild(rutas)
    ],
    exports: [RouterModule]
})

export class CursosRoutingModule {}