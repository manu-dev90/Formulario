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

  fechaInicio: Date[] | null;
  fechaFin: Date[] | null;
  lista: any[];
  nombre: string;
  cantidad: number | null;
  descripcion: string;
  minDate: Date;
  maxDate: Date;
  es: any;

  constructor() {
    this.fechaInicio = null;
    this.fechaFin = null;
    this.lista = [];
    this.nombre = '';
    this.cantidad = null;
    this.descripcion = '';
    this.minDate = new Date();
    this.maxDate = new Date();
  }

  setMinDate(event: any) {
    this.maxDate = event;
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
