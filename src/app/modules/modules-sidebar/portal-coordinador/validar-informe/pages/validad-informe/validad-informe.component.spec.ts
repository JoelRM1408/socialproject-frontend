import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadInformeComponent } from './validad-informe.component';

describe('ValidadInformeComponent', () => {
  let component: ValidadInformeComponent;
  let fixture: ComponentFixture<ValidadInformeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidadInformeComponent]
    });
    fixture = TestBed.createComponent(ValidadInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
