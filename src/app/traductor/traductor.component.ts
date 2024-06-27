import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.scss']
})
export class TraductorComponent {
  @Input() translate: string = 'ca';
  @Input() buttonLabel: string = 'Castellano';
  @Input() es: any = {
    dayNames: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
    dayNamesShort: ["dom","lun","mar","mié","jue","vie","sáb"],
    dayNamesMin: ["dom","lun","mar","mié","jue","vie","sáb"],
    monthNames: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    monthNamesShort: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    today: 'Hoy',
    clear: 'Limpiar',
    firstDayOfWeek: 1,
  };
  @Input() ca: any = {
    dayNames: ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],
    dayNamesShort: ["diu","dil","dim","dix","dij","div","dis"],
    dayNamesMin: ["diu","dil","dim","dix","dij","div","dis"],
    monthNames: ["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],
    monthNamesShort: ["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"],
    today: 'Hoy',
    clear: 'Limpiar',
    firstDayOfWeek: 1,
  };
  @Output() translateChange = new EventEmitter<string>();
  @Output() buttonLabelChange = new EventEmitter<string>();
  @Output() primengConfigChange = new EventEmitter<any>();

  botonTraducir() {
    if (this.translate === 'ca') {
      this.translate = 'es';
      this.buttonLabel = 'Català';
      this.primengConfigChange.emit(this.es);
    } else {
      this.translate = 'ca';
      this.buttonLabel = 'Castellano';
      this.primengConfigChange.emit(this.ca);
    }
    this.translateChange.emit(this.translate);
    this.buttonLabelChange.emit(this.buttonLabel);
  }
}
