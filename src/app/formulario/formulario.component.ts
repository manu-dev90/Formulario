import { getLocaleDayNames, getLocaleFirstDayOfWeek } from '@angular/common';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  validationInput(event: KeyboardEvent) {
    const input = event.key;

    if (input === 'Backspace') {
      return;
    }

    if (isNaN(Number(input))) {
      event.preventDefault();
    }
  }

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

  onSubmit() {
    if (!this.verificarFormulario()) {
      alert('Por favor, rellene todos los campos');
      return;
    }

    this.lista.push({
      nombre: this.nombre,
      cantidad: this.cantidad,
      descripcion: this.descripcion,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
    });

    this.nombre = '';
    this.cantidad = null;
    this.descripcion = '';
    this.fechaInicio = null;
    this.fechaFin = null;
  }
  verificarFormulario(): boolean {
    return (
      this.nombre.trim() !== '' &&
      this.cantidad !== null &&
      this.descripcion.trim() !== '' &&
      this.fechaInicio !== null &&
      this.fechaFin !== null
    );
  }
}
