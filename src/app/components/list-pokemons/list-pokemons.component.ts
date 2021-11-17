import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {

  numbers = [1,2,2,23,4,1,1]

  constructor() { }

  ngOnInit(): void {
  }

}
