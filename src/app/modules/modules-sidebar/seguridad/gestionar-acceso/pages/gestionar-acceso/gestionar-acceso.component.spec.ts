import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAccesoComponent } from './gestionar-acceso.component';

describe('GestionarAccesoComponent', () => {
  let component: GestionarAccesoComponent;
  let fixture: ComponentFixture<GestionarAccesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarAccesoComponent]
    });
    fixture = TestBed.createComponent(GestionarAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
