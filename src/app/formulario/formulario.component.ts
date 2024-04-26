import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  validationInput(event: KeyboardEvent) 
  {
    const input = event.key;

    if(input === 'Backspace') 
      {
        return;
      }

    if(isNaN(Number(input)))
      {
        event.preventDefault();
      }
  }
  
  fecha: Date[];
  
  constructor()
  {
    this.fecha = [];
  }

}
