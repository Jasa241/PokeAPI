import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { MyPokemonsComponent } from './my-pokemons/my-pokemons.component';
import { DetailsPokemonsComponent } from './details-pokemons/details-pokemons.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LayoutComponent } from './layout/layout.component';

//Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    CardPokemonComponent,
    ListPokemonsComponent,
    MyPokemonsComponent,
    DetailsPokemonsComponent,
    LoginComponent,
    PerfilComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  exports:[
    CardPokemonComponent,
    ListPokemonsComponent,
    MyPokemonsComponent,
    DetailsPokemonsComponent,
    LoginComponent,
    PerfilComponent,
    LayoutComponent
  ]
})
export class ComponentsModule { }
