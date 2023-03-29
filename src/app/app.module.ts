import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './component/register/register.component';
import { MisionComponent } from './component/mision/mision.component';
import { CursosComponent } from './component/cursos/cursos.component';
import { ContainerInicioComponent } from './component/container-inicio/container-inicio.component';
import { ContainerMisionComponent } from './component/container-mision/container-mision.component';
import { ContainerCursosComponent } from './component/container-cursos/container-cursos.component';
import { ContainerRegisterComponent } from './component/container-register/container-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    MisionComponent,
    CursosComponent,
    ContainerInicioComponent,
    ContainerMisionComponent,
    ContainerCursosComponent,
    ContainerRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
