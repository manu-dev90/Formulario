import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fecha-fin',
  templateUrl: './fecha-fin.component.html',
  styleUrls: ['./fecha-fin.component.scss']
})
export class FechaFinComponent {
  
  @Input() fechaFin: Date | null = null;
  @Input() minDateFin: Date = new Date(1900, 0, 1);
  @Input() maxDateFin: Date = new Date(3000, 11, 31);
  @Input() maxDateInicio: Date = new Date(3000, 11, 31);
  @Input() fechaInicio: Date | null = null;
  
  @Output() fechaFinChange = new EventEmitter<Date | null>();
  @Output() minDateFinChange = new EventEmitter<Date>();
  @Output() maxDateFinChange = new EventEmitter<Date>();
  @Output() maxDateInicioChange = new EventEmitter<Date>();

  setMinDateFin(event: Date) {
    this.fechaFin = event;
    this.maxDateInicio = event;
    this.fechaFinChange.emit(this.fechaFin);
    this.maxDateInicioChange.emit(this.maxDateInicio);

    if (this.fechaInicio && this.fechaInicio > this.fechaFin) {
      this.fechaInicio = null;
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
        this.fechaFinChange.emit(this.fechaInicio);
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