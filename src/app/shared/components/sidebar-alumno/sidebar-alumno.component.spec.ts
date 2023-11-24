import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAlumnoComponent } from './sidebar-alumno.component';

describe('SidebarAlumnoComponent', () => {
  let component: SidebarAlumnoComponent;
  let fixture: ComponentFixture<SidebarAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarAlumnoComponent]
    });
    fixture = TestBed.createComponent(SidebarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
