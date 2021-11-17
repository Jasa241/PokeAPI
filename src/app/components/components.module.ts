import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { MyPokemonsComponent } from './my-pokemons/my-pokemons.component';
import { DetailsPokemonsComponent } from './details-pokemons/details-pokemons.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

//Angular Material
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CardPokemonComponent,
    ListPokemonsComponent,
    MyPokemonsComponent,
    DetailsPokemonsComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    CardPokemonComponent,
    ListPokemonsComponent,
    MyPokemonsComponent,
    DetailsPokemonsComponent,
    LoginComponent,
    PerfilComponent
  ]
})
export class ComponentsModule { }
