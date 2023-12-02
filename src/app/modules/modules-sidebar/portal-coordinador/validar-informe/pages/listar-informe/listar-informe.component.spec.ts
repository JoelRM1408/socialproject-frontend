import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInformeComponent } from './listar-informe.component';

describe('ListarInformeComponent', () => {
  let component: ListarInformeComponent;
  let fixture: ComponentFixture<ListarInformeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarInformeComponent]
    });
    fixture = TestBed.createComponent(ListarInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
