import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { ArticulosListaComponent } from './articulos-lista/articulos-lista.component';
import { RouterModule } from '@angular/router';
import { ArticulosCargaComponent } from './articulos-carga/articulos-carga.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
  {path: 'listaarticulos/:id', component: ArticulosListaComponent},
  {path: 'listaarticulos', component: ArticulosListaComponent},
  {path: 'cargaarticulos', component: ArticulosCargaComponent},
  {path: 'principal', component: PrincipalComponent}])],
  declarations: [ MenuComponent, PrincipalComponent, ArticulosListaComponent, ArticulosCargaComponent ],
  bootstrap:    [ PrincipalComponent ]
})
export class AppModule { }
