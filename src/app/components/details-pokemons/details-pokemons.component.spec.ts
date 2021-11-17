import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPokemonsComponent } from './details-pokemons.component';

describe('DetailsPokemonsComponent', () => {
  let component: DetailsPokemonsComponent;
  let fixture: ComponentFixture<DetailsPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
