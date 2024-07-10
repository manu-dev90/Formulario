import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.scss']
})
export class FechaComponent {

  @Input() fecha: Date | null = null;
  @Input() minDate: Date = new Date(1900, 0, 1);
  @Input() maxDate: Date = new Date(3000, 11, 31);
  @Input() relatedDate: Date | null = null;
  @Input() calendarType: string = 'noneDate';

  @Output() fechaChange = new EventEmitter<Date | null>();
  @Output() relatedDateChange = new EventEmitter<Date>();

  handleDateSelect(event: Date) 
  {
    this.fecha = event;
    this.fechaChange.emit(this.fecha);
      if(this.calendarType === 'startDate')
      {
        this.relatedDateChange.emit(this.fecha);
      } else if(this.calendarType === 'endDate')
      {
        this.relatedDateChange.emit(this.fecha);
      }
  }

  validateInput()
  {
    const inputField = document.querySelector(`p-calendar[[(ngModel)]="fecha]input`) as HTMLInputElement;
    const value = inputField.value;
    const regex = /^\d{2}\/\d{2}\/\d{2} \d{2}:\d{2}$/;

      if(regex.test(value))
      {
        const parts = value.split(/[\s/:]/);
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10)- 1;
        const year = parseInt(parts [2], 10)+ 2000;
        const hours = parseInt(parts[3], 10);
        const minutes = parseInt(parts[4], 10);
        const date = new Date(year,month,day,hours,minutes);
          this.fecha = date;
          this.fechaChange.emit(this.fecha);

          if(this.calendarType === 'starDate')
          {
            this.relatedDateChange.emit(this.fecha);
          }else if (this.calendarType === 'endDate')
          {
            this.relatedDateChange.emit(this.fecha);
          }else 
          {
            this.fecha = null;
            this.fechaChange.emit(this.fecha);
          }
      }
  }

  restrictInputLength(event: KeyboardEvent, maxLenght: number)
  {
    const input = event.target as HTMLInputElement;
      
      if(input.value.length >= maxLenght && !this.isControlKey(event))
      {
        event.preventDefault();
      }
  }

  isControlKey(event: KeyboardEvent): boolean
  {
    const controlKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    return controlKeys.includes(event.key);
  }
}
