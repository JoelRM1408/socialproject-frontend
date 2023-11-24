import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSidebarAlumnoComponent } from './home-sidebar-alumno.component';

describe('HomeSidebarAlumnoComponent', () => {
  let component: HomeSidebarAlumnoComponent;
  let fixture: ComponentFixture<HomeSidebarAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSidebarAlumnoComponent]
    });
    fixture = TestBed.createComponent(HomeSidebarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
