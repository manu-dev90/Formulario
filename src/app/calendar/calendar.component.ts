import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  minDateInicio: Date = new Date(1900, 0, 1);
  maxDateInicio: Date = new Date(3000, 11, 31);
  minDateFin: Date = new Date(1900, 0, 1);
  maxDateFin: Date = new Date(3000, 11, 31);
  es: any = {
    dayNames: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
    dayNamesShort: ["dom","lun","mar","mié","jue","vie","sáb"],
    dayNamesMin: ["dom","lun","mar","mié","jue","vie","sáb"],
    monthNames: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    monthNamesShort: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    today: 'Hoy',
    clear: 'Limpiar',
    firstDayOfWeek: 1,
  };
  ca: any = {
    dayNames: ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],
    dayNamesShort: ["diu","dil","dim","dix","dij","div","dis"],
    dayNamesMin: ["diu","dil","dim","dix","dij","div","dis"],
    monthNames: ["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],
    monthNamesShort: ["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"],
    today: 'Hoy',
    clear: 'Limpiar',
    firstDayOfWeek: 1,
  };
  translate: string = 'ca';
  buttonLabel: string = 'Castellano';

  constructor(public primengConfig: PrimeNGConfig) {
    this.primengConfig.setTranslation(this.ca);
  }

  botonTraducir() {
    if (this.translate === 'ca') {
      this.primengConfig.setTranslation(this.es);
      this.translate = 'es';
      this.buttonLabel = 'Català';
    } else {
      this.primengConfig.setTranslation(this.ca);
      this.translate = 'ca';
      this.buttonLabel = 'Castellano';
    }
  }
}
