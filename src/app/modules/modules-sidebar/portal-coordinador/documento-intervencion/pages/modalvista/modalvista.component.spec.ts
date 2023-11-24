import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalvistaComponent } from './modalvista.component';

describe('ModalvistaComponent', () => {
  let component: ModalvistaComponent;
  let fixture: ComponentFixture<ModalvistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalvistaComponent]
    });
    fixture = TestBed.createComponent(ModalvistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
