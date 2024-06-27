import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fecha-inicio',
  templateUrl: './fecha-inicio.component.html',
  styleUrls: ['./fecha-inicio.component.scss']
})
export class FechaInicioComponent {
 
  @Input() fechaInicio: Date | null = null;
  @Input() minDateInicio: Date = new Date(1900, 0, 1);
  @Input() maxDateInicio: Date = new Date(3000, 11, 31);
  @Input() minDateFin: Date | null = new Date(1900, 0, 1);
  @Input() fechaFin: Date | null = null;
 
  @Output() fechaInicioChange = new EventEmitter<Date | null>();
  @Output() minDateFinChange = new EventEmitter<Date>();

  setMinDateInicio(event: Date) {
    this.fechaInicio = event;
    this.minDateFin = event;
    this.fechaInicioChange.emit(this.fechaInicio);
    this.minDateFinChange.emit(this.minDateFin);

    if (this.fechaFin && this.fechaFin < this.fechaInicio) {
      this.fechaFin = null;
    }
  }

  validateInput(fieldName: string) {
    const inputField = document.querySelector(`p-calendar[[(ngModel)]="${fieldName}"] input`) as HTMLInputElement;
    const value = inputField.value;
    const regex = /^\d{2}\/\d{2}\/\d{2} \d{2}:\d{2}$/;

    if (regex.test(value)) {
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
        this.fechaInicioChange.emit(this.fechaInicio);
        this.minDateFinChange.emit(this.minDateFin);

        if (this.fechaFin && this.fechaFin < this.fechaInicio) {
          this.fechaFin = null;
        }
      } else if (fieldName === 'fechaFin') {
        this.fechaFin = date;
        this.maxDateInicio = date;

        if (this.fechaInicio && this.fechaInicio > this.fechaFin) {
          this.fechaInicio = null;
        }
      }
    } else {
      if (fieldName === 'fechaInicio') {
        this.fechaInicio = null;
      } else if (fieldName === 'fechaFin') {
        this.fechaFin = null;
      }
    }
  }

  restrictInputLength(event: KeyboardEvent, maxLength: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length >= maxLength && !this.isControlKey(event)) {
      event.preventDefault();
    }
  }

  isControlKey(event: KeyboardEvent): boolean {
    const controlKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    return controlKeys.includes(event.key);
  }
}
