import { Component } from '@angular/core';

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

  constructor() {
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
  }

  setMinDateInicio(event: Date) {
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

}
