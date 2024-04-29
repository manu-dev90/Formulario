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
  

  fechaInicio: Date[];
  fechaFin: Date[];
  lista: any[];
  nombre: string ;
  cantidad: number ;
  descripcion: string;


  
  constructor()
  {
    this.fechaInicio = [];
    this.fechaFin = [];
    this.lista = [];
    this.nombre = '';
    this.cantidad = 0;
    this.descripcion = '';
  }

  onSubmit() 
  {
    this.lista.push(
      {
        nombre: this.nombre,
        cantidad: this.cantidad,
        descripcion: this.descripcion,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin
      }
    );

    this.nombre = '' ;
    this.cantidad = 0;
    this.descripcion = '';
    this.fechaInicio = this.fechaInicio;
    this.fechaFin = this.fechaFin; 
  
  
  }

}
