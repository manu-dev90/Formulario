import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent {

  fechaInicio: Date | null;
  fechaFin: Date | null;
  lista: any[];
  nombre: string;
  cantidad: number | null;
  descripcion: string;
  minDateInicio: Date;
  minDateFin: Date;
  maxDateInicio: Date;
  maxDateFin: Date;
  es: any;
  ca: any;
  translate: string;
  buttonLabel: string;

  constructor(private primengConfig: PrimeNGConfig) {
    this.fechaInicio = null;
    this.fechaFin = null;
    this.lista = [];
    this.nombre = '';
    this.cantidad = null;
    this.descripcion = '';
    this.minDateInicio = new Date(1900, 0, 1);
    this.minDateFin = new Date(1900, 0, 1);
    this.maxDateInicio = new Date(3000, 11, 31);
    this.maxDateFin = new Date(3000, 11, 31);

    this.ca =
      {
        dayNames: ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],
        dayNamesShort: ["diu","dil","dim","dix","dij","div","dis"],
        dayNamesMin: ["diu","dil","dim","dix","dij","div","dis"],
        monthNames: ["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],
        monthNamesShort: ["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"],
        today: 'Hoy',
        clear: 'Limpiar',
        firstDayOfWeek: 1,
      };

      this.es =
        {
          dayNames: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
          dayNamesShort: ["dom","lun","mar","mié","jue","vie","sáb"],
          dayNamesMin: ["dom","lun","mar","mié","jue","vie","sáb"],
          monthNames: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septimbre","Octubre","Noviembre","Diciembre"],
          monthNamesShort: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
          today: 'Hoy',
          clear: 'Limpiar',
          firstDayOfWeek: 1,
        };

        this.translate = 'ca';
        this.buttonLabel = 'Castellano'
        this.primengConfig.setTranslation(this.ca);
  }

  botonTraducir()
  {
    if(this.translate === 'ca')
      {
        this.primengConfig.setTranslation(this.es);
        this.translate = 'es';
        this.buttonLabel = 'Castellano';
      } else
      {
        this.primengConfig.setTranslation(this.ca);
        this.translate = 'ca';
        this.buttonLabel = 'Català';
      }
  }

  setMinDateInicio(event: Date) 
  {
    this.fechaInicio = event;
    this.minDateFin = event;

    if(this.fechaFin && this.fechaFin < this.fechaInicio)
      {
        this.fechaFin = null;
      }
  }

  setMinDateFin(event: Date)
  {
    this.fechaFin = event;
    this.maxDateInicio = event;

    if(this.fechaInicio && this.fechaInicio > this.fechaFin)
      {
        this.fechaInicio = null;
      }
  }

  restrictInputLength(event: KeyboardEvent, maxLength: number)
  {
    const input = event.target as HTMLInputElement;
    if(input.value.length >= maxLength && !this.isControlKey(event))
      {
        event.preventDefault();
      }
  }

  isControlKey(event: KeyboardEvent): boolean
  {
    const controlKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    return controlKeys.includes(event.key);
  }

  validateInput(fieldName: string) 
  {
    const inputField = document.querySelector(`p-calendar[[(ngModel)]="${fieldName}"] input`) as HTMLInputElement;
    const value = inputField.value;
    const regex = /^\d{2}\/\d{2}\/\d{2} \d{2}:\d{2}$/;

    if (regex.test(value)) 
      {
      const parts = value.split(/[\s/:]/);
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; 
      const year = parseInt(parts[2], 10) + 2000; 
      const hours = parseInt(parts[3], 10);
      const minutes = parseInt(parts[4], 10);
      const date = new Date(year, month, day, hours, minutes);


    if (fieldName === 'fechaInicio') {
        this.fechaInicio = date;
        this.minDateFin = date;

    if (this.fechaFin && this.fechaFin < this.fechaInicio) 
        {
       this.fechaFin = null;
        }
      
    } else if (fieldName === 'fechaFin') 
      {
      this.fechaFin = date; 
      this.maxDateInicio = date;

    if (this.fechaInicio && this.fechaInicio > this.fechaFin) 
        {
        this.fechaInicio = null;
        }
      }

    } else {

    if (fieldName === 'fechaInicio') 
      {
        this.fechaInicio = null;
      } else if (fieldName === 'fechaFin') 
        {
        this.fechaFin = null;
      }
    }
  }
}
