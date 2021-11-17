import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'Layout',
    component: LayoutComponent,
    children:[ 
      {
        path: 'ListPokemons',
        component: ListPokemonsComponent
      },
    ]
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
