import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerInicioComponent } from './component/container-inicio/container-inicio.component';
import { ContainerCursosComponent } from './component/container-cursos/container-cursos.component';
import { ContainerRegisterComponent } from './component/container-register/container-register.component';
import { ContainerMisionComponent } from './component/container-mision/container-mision.component';

const routes: Routes = [
  {path:'', component:ContainerInicioComponent},
  {path:'cursos', component:ContainerCursosComponent},
  {path:'register', component:ContainerRegisterComponent},
  {path:'mision', component:ContainerMisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
