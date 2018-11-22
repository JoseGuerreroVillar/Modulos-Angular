import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const rutas: Route[] = [
    {path: "", component: HomeComponent}
]

@NgModule ({
    imports: [
        RouterModule.forChild(rutas)
    ],
    declarations: [ 
    ],
    exports: [RouterModule]
})

export class PrincipalRoutingModule {}