import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEquipoComponent } from './listar-equipo.component';

describe('ListarEquipoComponent', () => {
  let component: ListarEquipoComponent;
  let fixture: ComponentFixture<ListarEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEquipoComponent]
    });
    fixture = TestBed.createComponent(ListarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
