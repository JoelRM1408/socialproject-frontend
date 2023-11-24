import { NgModule } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon"
import { DomSanitizer } from "@angular/platform-browser"

@NgModule({})
export class IconModule{
  constructor(
    private _domSanitizer: DomSanitizer,
    private _matIconRegistry: MatIconRegistry
  ){
      this._matIconRegistry.addSvgIcon('docint',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/docint.svg')
      );
      this._matIconRegistry.addSvgIcon('proyecto',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/proyecto.svg')
      );
      this._matIconRegistry.addSvgIcon('informe',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/informe.svg')
      );
      this._matIconRegistry.addSvgIcon('actividad',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/actividad.svg')
      );
      this._matIconRegistry.addSvgIcon('buscador',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/buscador.svg')
      );
      this._matIconRegistry.addSvgIcon('agregar',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/agregar.svg')
      );
      this._matIconRegistry.addSvgIcon('regresar',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/regresar.svg')
      );
      this._matIconRegistry.addSvgIcon('portalestudiante',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/portalestudiante.svg')
      );
      this._matIconRegistry.addSvgIcon('portalcoord',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/portalcoord.svg')
      );
      this._matIconRegistry.addSvgIcon('confi',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/confi.svg')
      );
      this._matIconRegistry.addSvgIcon('seguridad',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/seguridad.svg')
      );
      this._matIconRegistry.addSvgIcon('reportes',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/reportes.svg')
      );
      this._matIconRegistry.addSvgIcon('regresardashboard',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/regresardashboard.svg')
      );
      this._matIconRegistry.addSvgIcon('equipo',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/equipo.svg')
      );
  }
}
