import { Component, OnInit, inject } from '@angular/core';
import { SidebarServiceService } from 'src/app/shared/services/sidebar-service.service';

@Component({
  selector: 'app-home-sidebar-alumno',
  templateUrl: './home-sidebar-alumno.component.html',
  styleUrls: ['./home-sidebar-alumno.component.css']
})
export class HomeSidebarAlumnoComponent {
  status:boolean = true;
  nombre:string = 'Joel'
  _sidebarService = inject(SidebarServiceService)


  ngOnInit(): void {
    this._sidebarService.sidebarEffectButton$.subscribe(status =>{
      this.status = status
    })
  }
}
