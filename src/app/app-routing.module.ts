import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { AsociadosComponent } from './asociados/asociados.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component:HomeComponent},
    {path: 'inicio', component:InicioComponent},
    {path: 'agregar', component:AsociadosComponent},
    {path: 'quienes_somos', component: QuienessomosComponent}
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
