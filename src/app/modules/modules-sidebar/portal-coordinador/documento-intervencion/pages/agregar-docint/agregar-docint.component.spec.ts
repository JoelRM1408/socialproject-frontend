import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDocintComponent } from './agregar-docint.component';

describe('AgregarDocintComponent', () => {
  let component: AgregarDocintComponent;
  let fixture: ComponentFixture<AgregarDocintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarDocintComponent]
    });
    fixture = TestBed.createComponent(AgregarDocintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
