import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInformeComponent } from './agregar-informe.component';

describe('AgregarInformeComponent', () => {
  let component: AgregarInformeComponent;
  let fixture: ComponentFixture<AgregarInformeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarInformeComponent]
    });
    fixture = TestBed.createComponent(AgregarInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
